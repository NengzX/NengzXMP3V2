import { execFile } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: true, // parse JSON body
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed');
    return;
  }

  const { message } = req.body;

  if (!message || !message.text) {
    res.status(200).send('No text');
    return;
  }

  const chatId = message.chat.id;
  const text = message.text;

  // Simple URL detection
  if (!text.startsWith('http')) {
    // Reply "Send me a valid URL"
    await replyTelegram(chatId, "❌ Please send a valid video URL.");
    return res.status(200).send('Invalid URL');
  }

  // Respond immediately to Telegram so webhook doesn't timeout
  res.status(200).send('OK');

  // Call yt-dlp to download and convert audio
  try {
    const timestamp = Date.now();
    const outputFile = `/tmp/audio_${timestamp}.mp3`;

    await new Promise((resolve, reject) => {
      execFile('yt-dlp', [
        '-x',
        '--audio-format', 'mp3',
        '--audio-quality', '192K',
        '-o', outputFile,
        text
      ], (error) => {
        if (error) reject(error);
        else resolve();
      });
    });

    // TODO: Upload the MP3 to Telegram via sendAudio method (you'll need to implement it)

    // Clean up file if needed

  } catch (err) {
    console.error('yt-dlp error:', err);
    await replyTelegram(chatId, "❌ Failed to process the video.");
  }
}

async function replyTelegram(chatId, text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}

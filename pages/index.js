import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>YT-MP3 Converter Bot</title>
        <meta name="description" content="Convert YouTube and more to MP3 on Telegram." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main style={styles.main}>
        <h1 style={styles.title}>🎵 YT-MP3 Converter Bot</h1>
        <p style={styles.description}>
          Convert YouTube, TikTok, SoundCloud and more to high-quality MP3 files right from Telegram!
        </p>
        <a
          href="https://t.me/YOUR_BOT_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Start Bot
        </a>
        <footer style={styles.footer}>
          Powered by <a href="https://t.me/ismenengzx" style={styles.link}>NengzX</a>
        </footer>
      </main>
    </>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    color: '#fff',
    fontFamily: "'Outfit', sans-serif",
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    color: '#00ffcc',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.25rem',
    maxWidth: '400px',
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: '#00ffcc',
    color: '#000',
    padding: '12px 24px',
    borderRadius: '10px',
    fontSize: '1.1rem',
    textDecoration: 'none',
    fontWeight: '700',
    transition: 'background-color 0.3s',
  },
  footer: {
    marginTop: '3rem',
    fontSize: '0.9rem',
    color: '#888',
  },
  link: {
    color: '#00ffcc',
    textDecoration: 'none',
  },
};

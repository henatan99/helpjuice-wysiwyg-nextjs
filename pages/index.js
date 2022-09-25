import Head from 'next/head'
import HeaderNav from '../src/components/Header'
import Main from '../src/components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <HeaderNav />
        </header>
        <div style={{width: '100%', marginTop: '0.6rem'}}>
          <Main />
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import Intro from '../components/intro/intro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sourav Dey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Intro/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

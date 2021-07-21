import Head from 'next/head'
import SideNav from '../react/component/SideNav/SideNav';
import Header from '../react/container/Header/Header';
import styles from '../styles/Home.module.css';
import Index from '../react/sections/Index/Index';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio- Kushal Upreti</title>
        <meta name="description" content="Hi. This is my portfolio page that showcases me and my skill, projects and so on." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SideNav />
      <div className={styles.content}>
        <main className={styles.main}>
          <Index />
        </main>
      </div>
    </>
  )
}

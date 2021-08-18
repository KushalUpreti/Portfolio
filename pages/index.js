import Head from 'next/head'
import SideNav from '../react/component/SideNav/SideNav';
import Header from '../react/container/Header/Header';
import styles from '../styles/Home.module.css';
import Index from '../react/sections/Index/Index';
import About from '../react/sections/About/About';
import Socials from '../react/component/Socials/Socials';
import Skills from '../react/sections/Skills/Skills';
import Projects from '../react/sections/Projects/Projects';
import Contact from '../react/sections/Contact/Contact';
import End from '../react/sections/End/End';
import { SidenavContextProvider } from '../react/context/sidenav-context';
import { NotificationProvider } from '../react/context/notify-context';
import Notify from '../react/component/Notify/Notify';
import ExtraProjects from '../react/sections/ExtraProjects/ExtraProjects';


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio- Kushal Upreti</title>
        <meta name="description" content="Hi. This is my portfolio page that showcases me and my skill, projects and so on." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <NotificationProvider>
        <SidenavContextProvider>
          <Notify />
          <SideNav />
          <div className={styles.content}>
            <main className={styles.main}>
              <Index />
              <About />
              <Skills />
              <Projects />
              <ExtraProjects />
              <Contact />
              <End />
            </main>
          </div>
        </SidenavContextProvider>
      </NotificationProvider>
      <Socials />
    </>
  )
}

import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';

const projects = [
  {
    id: '#0X7FA2',
    title: 'Canvify',
    label: 'PROJECT: COLLAB_CANVAS',
    icon: 'database',
    description:
      'Real-time learning workspace with collaborative canvas, audio/video calling, chat, and admin controls.',
    stack: ['NEXT.JS', 'SOCKET.IO', 'EXPRESS', 'MONGODB'],
    metrics: [
      ['Mode', 'Live'],
      ['Signal', '98%'],
      ['Class', 'Realtime'],
    ],
    source: 'https://canvify.vercel.app',
    demo: 'https://canvify.vercel.app',
  },
  {
    id: '#0X11CC',
    title: 'React-Chat',
    label: 'FRAGMENT: CHAT_RELAY',
    icon: 'hub',
    description:
      'Realtime chat application with friends, groups, online presence, message deletion, and persistent threads.',
    stack: ['REACT', 'SOCKET.IO', 'EXPRESS', 'MONGODB'],
    metrics: [
      ['Mode', 'Prototype'],
      ['Signal', '88%'],
      ['Class', 'Comms'],
    ],
    source: 'https://github.com/KushalUpreti/React-Chat',
    demo: 'https://kushalupreti.github.io/ReactChat',
  },
  {
    id: '#0X99DE',
    title: 'Web Games Portal',
    label: 'INTERFACE: GAME_GRID',
    icon: 'grid_view',
    description:
      'Portal for 1400+ instant HTML5 games with genre browsing, account history, favorites, and avatars.',
    stack: ['REACT', 'FIREBASE', 'HTML5'],
    metrics: [
      ['Games', '1400+'],
      ['Signal', '91%'],
      ['Class', 'Portal'],
    ],
    source: 'https://github.com/KushalUpreti/WebGamesPortal',
    demo: 'https://kushalupreti.github.io/WebGamesPortal/',
  },
  {
    id: '#0X55BB',
    title: 'Keystroke',
    label: 'CORE: TYPE_TRAINER',
    icon: 'keyboard',
    description:
      'Touch typing trainer with virtual keyboard, stat tracking, difficulty controls, and custom text drills.',
    stack: ['HTML', 'CSS', 'JAVASCRIPT'],
    metrics: [
      ['Mode', 'Live'],
      ['Signal', '84%'],
      ['Class', 'Utility'],
    ],
    source: 'https://github.com/KushalUpreti/Keystroke',
    demo: 'https://kushalupreti.github.io/Keystroke/',
  },
  {
    id: '#0XA821',
    title: 'Course Management',
    label: 'API: CAMPUS_SYSTEM',
    icon: 'monitoring',
    description:
      'University portal concept with student, tutor, and admin sections built around operational course workflows.',
    stack: ['REACT', 'NODEJS', 'EXPRESS', 'MYSQL'],
    metrics: [
      ['Scope', 'Full Stack'],
      ['Layer', 'Admin'],
      ['Class', 'Portal'],
    ],
    source: 'https://github.com/SafalFrom2050/course-management-system',
  },
  {
    id: '#0XFF00',
    title: 'Android Apps',
    label: 'ARCHIVE: MOBILE_PACK',
    icon: 'developer_mode',
    description:
      'Voice recorder, COVID REST client, Jetpack TODO, notes, and calculator experiments from the Android archive.',
    stack: ['JAVA', 'KOTLIN', 'ANDROID', 'REST'],
    metrics: [
      ['Apps', '05'],
      ['Layer', 'Mobile'],
      ['Class', 'Archive'],
    ],
    source: 'https://github.com/KushalUpreti',
  },
];

const socials = [
  { label: 'GITHUB', href: 'https://github.com/KushalUpreti', icon: 'code' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/kushal-upreti-55240912a/', icon: 'hub' },
  { label: 'EMAIL', href: 'mailto:kushalupreti101@gmail.com', icon: 'alternate_email' },
];

const glitterNodes = Array.from({ length: 24 }, (_, index) => index);
const sparkTokens = ['01', '11', '0X', 'AI', 'API', 'RUN', 'SYS', '++'];

const resumeSyncStack = ['REACT', 'TYPESCRIPT', 'FASTAPI', 'OPENAI', 'POSTGRES', 'AWS', 'DOCKER'];

const resumeSyncModes = [
  {
    label: 'SNIPER_MODE',
    icon: 'gps_fixed',
    text: 'Locks onto a job description, scores the resume signal, and rewrites targeted fields without drifting from the source profile.',
  },
  {
    label: 'POLISHER_MODE',
    icon: 'auto_fix_high',
    text: 'Turns rough notes, scattered experience, and raw career data into recruiter-ready resume sections in seconds.',
  },
  {
    label: 'DIFF_CORE',
    icon: 'difference',
    text: 'Shows AI-generated changes side by side so users can accept stronger phrasing without losing control.',
  },
];

export default function Home() {
  const [heroSparks, setHeroSparks] = useState([]);
  const sparkIdRef = useRef(0);
  const sparkTickRef = useRef(0);

  const emitHeroSpark = useCallback((event) => {
    const now = performance.now();

    if (now - sparkTickRef.current < 42) {
      return;
    }

    sparkTickRef.current = now;

    const rect = event.currentTarget.getBoundingClientRect();
    const id = sparkIdRef.current + 1;
    sparkIdRef.current = id;

    const spark = {
      id,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      dx: Math.round((Math.random() - 0.5) * 90),
      dy: Math.round(-28 - Math.random() * 62),
      size: Math.round(9 + Math.random() * 9),
      token: sparkTokens[id % sparkTokens.length],
    };

    setHeroSparks((sparks) => [...sparks.slice(-18), spark]);
    window.setTimeout(() => {
      setHeroSparks((sparks) => sparks.filter((item) => item.id !== id));
    }, 900);
  }, []);

  return (
    <>
      <Head>
        <title>Kushal Upreti | Enterprise Application Engineer</title>
        <meta
          name="description"
          content="Portfolio for Kushal Upreti, focused on enterprise application development with Java, Spring, Angular, React, REST APIs, microservices, and CI/CD."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.page}>
        <div className={styles.scanlines} />
        <div className={styles.scanlineMove} />
        <div className={styles.glitterField} aria-hidden="true">
          {glitterNodes.map((node) => (
            <span key={node} />
          ))}
        </div>

        <nav className={styles.navbar}>
          <a className={styles.navBrand} href="#home" aria-label="Kushal Upreti portfolio home">
            <span className="material-symbols-outlined">terminal</span>
            SYS_PORTFOLIO_V2.0
          </a>
          <div className={styles.navLinks}>
            <a href="#resumesync">FEATURED</a>
            <a href="#work">WORK</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
            <a href="/assets/Resume.pdf" target="_blank" rel="noreferrer">
              RESUME
            </a>
          </div>
          <a className={styles.navIcon} href="#work" aria-label="Open project board">
            <span className="material-symbols-outlined">settings_input_component</span>
          </a>
        </nav>

        <section className={styles.hero} id="home" onMouseMove={emitHeroSpark}>
          <div className={styles.circuitBg} />
          <div className={styles.sparkField} aria-hidden="true">
            {heroSparks.map((spark) => (
              <span
                key={spark.id}
                style={{
                  '--spark-x': `${spark.x}px`,
                  '--spark-y': `${spark.y}px`,
                  '--spark-dx': `${spark.dx}px`,
                  '--spark-dy': `${spark.dy}px`,
                  '--spark-size': `${spark.size}px`,
                }}
              >
                {spark.token}
              </span>
            ))}
          </div>
          <div className={styles.dataRain} aria-hidden="true">
            <span>0101</span>
            <span>SYS</span>
            <span>0XFA</span>
            <span>RUN</span>
            <span>1011</span>
          </div>
          <div className={styles.heroInner}>
            <div className={styles.portraitWrap}>
              <div className={styles.portraitFrame}>
                <Image
                  src="/assets/Headshot.png"
                  alt="Kushal Upreti headshot"
                  fill
                  className={styles.userPortrait}
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />
                <Image
                  src="/assets/johnny/screen.png"
                  alt=""
                  fill
                  className={styles.johnnyFlash}
                  sizes="(max-width: 768px) 256px, 320px"
                  aria-hidden="true"
                />
              </div>
              <div className={styles.cornerBracket} />
            </div>

            <div className={styles.heroCopy}>
              <div className={styles.badge}>ENTERPRISE APPLICATION ENGINEER</div>
              <h1 className={styles.glitch}>
                KUSHAL // <br />
                <span>UPRETI</span>
              </h1>
              <p className={styles.tagline}>
                Building Java, Spring, Angular, and React applications for enterprise workflows,
                REST APIs, microservices, and data-rich user interfaces.
              </p>
              <div className={styles.heroActions}>
                <a href="#work">
                  VIEW_PROJECTS
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a href="/assets/Resume.pdf" target="_blank" rel="noreferrer">
                  VIEW_RESUME
                </a>
              </div>
            </div>
          </div>

          <div className={styles.hudLeft} aria-hidden="true">
            <div>STACK: JAVA / SPRING / REACT</div>
            <div>DOMAIN: ENTERPRISE_APPS</div>
            <span>
              <i />
            </span>
          </div>
          <div className={styles.hudRight} aria-hidden="true">
            <div>
              <span className="material-symbols-outlined">memory</span>
              <span>SPRING / ANGULAR / MICROSERVICES</span>
            </div>
            <div>CI_CD_PIPELINE_READY</div>
          </div>
        </section>

        <section className={styles.resumeSync} id="resumesync">
          <div className={styles.rsGrid} aria-hidden="true" />
          <div className={styles.rsGlow} aria-hidden="true" />
          <div className={styles.rsInner}>
            <div className={styles.rsHeader}>
              <div>
                <span className={styles.rsKicker}>HERO_PROJECT // LIVE_SYSTEM</span>
                <h2>RESUMESYNC_AI</h2>
              </div>
              <a href="https://resumesync.lol" target="_blank" rel="noreferrer">
                LAUNCH_DEMO
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>

            <div className={styles.rsStage}>
              <div className={styles.rsBrief}>
                <div className={styles.rsStatusBar}>
                  <span />
                  <strong>ATS OPTIMIZATION ENGINE ONLINE</strong>
                  <em>SOLE_DEV_ARCHITECT</em>
                </div>
                <p>
                  AI-powered resume optimization platform that parses resumes into a structured
                  JSON source of truth, analyzes job descriptions, and generates precise,
                  recruiter-friendly revisions without sacrificing formatting consistency.
                </p>

                <div className={styles.rsStack}>
                  {resumeSyncStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className={styles.rsActions}>
                  <a href="https://resumesync.lol" target="_blank" rel="noreferrer">
                    ENTER_RESUMESYNC
                    <span className="material-symbols-outlined">bolt</span>
                  </a>
                  <a href="https://github.com/KushalUpreti" target="_blank" rel="noreferrer">
                    VIEW_ENGINEERING_LOG
                  </a>
                </div>
              </div>

              <div className={styles.rsTerminal}>
                <div className={styles.rsTerminalTop}>
                  <span>resume.sync</span>
                  <i />
                  <i />
                  <i />
                </div>
                <div className={styles.rsSignal}>
                  <div>
                    <span>INPUT</span>
                    <strong>RAW_RESUME + JOB_DESCRIPTION</strong>
                  </div>
                  <div>
                    <span>MODEL</span>
                    <strong>OPENAI_PROMPT_PIPELINE</strong>
                  </div>
                  <div>
                    <span>OUTPUT</span>
                    <strong>ATS_READY_REVISION</strong>
                  </div>
                </div>
                <div className={styles.rsDiff}>
                  <p><span>-</span> Responsible for frontend features.</p>
                  <p><span>+</span> Built data-rich React workflows that improved recruiter scan clarity.</p>
                  <p><span>-</span> Worked with APIs and databases.</p>
                  <p><span>+</span> Integrated FastAPI services, PostgreSQL persistence, and AI revision flows.</p>
                </div>
              </div>
            </div>

            <div className={styles.rsModeGrid}>
              {resumeSyncModes.map((mode) => (
                <article key={mode.label}>
                  <span className="material-symbols-outlined">{mode.icon}</span>
                  <h3>{mode.label}</h3>
                  <p>{mode.text}</p>
                </article>
              ))}
            </div>

            <div className={styles.rsArchitecture}>
              <div>
                <span>01</span>
                <strong>PARSE</strong>
                <p>Normalize resume sections into JSON.</p>
              </div>
              <div>
                <span>02</span>
                <strong>ANALYZE</strong>
                <p>Extract role requirements from job descriptions.</p>
              </div>
              <div>
                <span>03</span>
                <strong>REWRITE</strong>
                <p>Generate targeted field-level improvements.</p>
              </div>
              <div>
                <span>04</span>
                <strong>RENDER</strong>
                <p>Rebuild consistent templates from trusted data.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.work} id="work">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <h2>PROJECT_BOARD</h2>
              <div />
              <span>PROJECTS [06]</span>
            </div>

            <div className={styles.jobGrid}>
              {projects.map((project) => (
                <article className={styles.jobCard} key={project.id}>
                  <div className={styles.cardCorners} />
                  <div className={styles.cardTop}>
                    <span>{project.id}</span>
                    <span className="material-symbols-outlined">{project.icon}</span>
                  </div>
                  <div className={styles.cardSignal} aria-hidden="true" />
                  <h3>{project.label}</h3>
                  <p>{project.description}</p>
                  <div className={styles.stackList}>
                    {project.stack.map((tech, index) => (
                      <span className={index === 0 ? styles.primaryPill : ''} key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.metricGrid}>
                    {project.metrics.map(([label, value]) => (
                      <div key={label}>
                        <span>{label}</span>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>
                  <div className={styles.cardLinks}>
                    <a href={project.source} target="_blank" rel="noreferrer">
                      VIEW_SOURCE
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        LIVE_DEMO
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.logAction}>
              <a href="/assets/Resume.pdf" target="_blank" rel="noreferrer">
                DOWNLOAD_RESUME
                <span className="material-symbols-outlined">download_done</span>
              </a>
            </div>
          </div>
        </section>

        <footer className={styles.footer} id="contact">
          <div className={styles.footerInner}>
            <div className={styles.statusBlock}>
              <div>
                <span />
                STATUS: ONLINE
              </div>
              <p>© 2026 ENTERPRISE_APPLICATION_PORTFOLIO // KUSHAL_UPRETI</p>
            </div>

            <div className={styles.socials}>
              {socials.map((social) => (
                <a href={social.href} key={social.label} target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined">{social.icon}</span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>

            <div className={styles.nodeBlock} id="about">
              <div>FOCUS: ENTERPRISE_APPLICATION_DEVELOPMENT</div>
              <div>METHODS: AGILE_SCRUM // CI_CD // TDD</div>
            </div>
          </div>
        </footer>

        <div className={styles.edgeRight} />
        <div className={styles.edgeLeft} />
      </main>
    </>
  );
}

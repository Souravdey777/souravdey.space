import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useRef } from "react";
import Link from "next/link";
import { ROUTES } from "../utils/routes";
import Clog from '@souravdey/colored-console'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function Home() {
  
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <div className={styles.container}>
      {/* HTML Head Tag */}
      <Head>
        <title>Sourav Dey</title>
        <link rel="icon" href="/Cursor.svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Oleo+Script+Swash+Caps"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
      </Head>
      <main className={styles.main}>
        <div className="LogoNav">
          <div style={{ fontWeight: "bold", fontSize: "1rem", flex: 1 }}>
            <span className="gradientText">Sourav Dey</span>
          </div>
        </div>
        <div className={styles.socialIcons}>
          <a
            href="mailto:piyush.kolkata@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/email.svg" width={30} height={30} />
          </a>
          <a
            href="https://github.com/Souravdey777/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/github.svg" width={30} height={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/souravdey777/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/linkedin.svg" width={30} height={30} />
          </a>
          <a
            href="https://twitter.com/Souravdey777/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/twitter.svg" width={30} height={30} />
          </a>
        </div>
        <div className="navigation">
          <div>
            /aboutMe
          </div>
          <div onClick={executeScroll}>
            /workExperience
          </div>
        </div>
        <div className="body">
          <div>

            <div style={{ textAlign: "right" }}>
              <Image src="/images/dots.png" width={190} height={64} />
            </div>
            <div className="qoutes">
              <Image src="/images/qoutes.svg" width={80} height={80} />
            </div>
            <p style={{ fontSize: "2rem", marginTop:"1rem" }}>
              <span className="gradientText">
                Hi <b>Sourav</b> here,
                <br/>I'm a <b>Full Stack Developer</b>
              </span>
            </p>
            <p className={styles.intro}>
              I am a <span className="gradientText">passionate learner</span>{" "}
              having a keen interest in collaborating to build digital solutions
              that{" "}
              <span className="gradientText">solve real-world problems</span>.
              I'm also a design thinking facilitator and a user-centric
              developer who believes that the merger between Design Thinking and
              Digital Technologies will lead to the building of user-centered
              solutions that are impactful toward the betterment of business and
              society.
            </p>
            <div style={{ marginTop: "3rem", display: "flex", justifyContent: "space-between" }}>
              <Image src="/Cursor.svg" width={50} height={50} />
              <Image src="/images/tagline.png" width={230} height={50} />
            </div>

            <div className={styles.socialIconsMobile}>

            <a
            href="mailto:piyush.kolkata@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/email.svg" width={30} height={30} />
          </a>
          <a
            href="https://github.com/Souravdey777/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/github.svg" width={30} height={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/souravdey777/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/linkedin.svg" width={30} height={30} />
          </a>
          <a
            href="https://twitter.com/Souravdey777/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/twitter.svg" width={30} height={30} />
          </a>
        </div>

            <div style={{ marginTop: "3rem" }}>
              <Image src="/images/dots.png" width={190} height={64} />
            </div>
            <p  ref={myRef} style={{ marginTop: "3rem", textAlign: "right", fontWeight: "bold" }}>
              /workExprience
            </p>
            <p style={{ marginTop: "3rem", fontWeight: "bold" }}>
              {">"} git checkout -b “ <span className="gradientText">WORK EXPIRENCE</span> ”
            </p>
            <p className="gradientText" style={{ marginTop: "3rem", fontSize: "2rem", fontWeight: "bold" }}>
              <span className="gradientText">TATA CONSULTANCY SERVICES</span>
            </p>
            <div style={{ fontSize: "1rem" }}>
              <span className="gradientText">Full Stack Developer</span>
            </div>
            <p>Website under Development</p>
          </div>
        </div>
      </main>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import { ROUTES } from "../utils/routes";

import getTimeAgoString from '@souravdey/time-ago'

export default function Home() {
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
          <div style={{ fontWeight: "bold", fontSize: "1.125rem", flex: 1 }}>
            <span className="gradientText">Sourav Dey</span>
          </div>
          <div className={styles.socialIcons}>
            <a
              href="mailto:piyush.kolkata@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://github.com/Souravdey777/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/souravdey777/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/Souravdey777/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="body">
          <div>
            <div className="qoutes">
              <Image src="/images/qoutes.svg" width={80} height={80} />
            </div>
            <p className="gradientText" style={{ fontSize: "2rem" }}>
              Hi <b>Sourav</b> here,
              <br />a <b>Full Stack Software Developer</b>
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
          </div>

          {/* <div className="floatText">
          <span className="gradientText">DESIGNING<br/>& DEVELOPING</span><br/><span className="floatTextWord">FUTURE</span>

          </div> */}
          {/* <div style={{ marginTop: "50px" }}>
            <Link href="/">
              <span className="link">/aboutMe</span>
            </Link>
            <Link href={ROUTES.WORK_EXPERIENCE}>
              <span style={{ marginRight: "40px" }}>
                {ROUTES.WORK_EXPERIENCE}
              </span>
            </Link>
            <span style={{ marginRight: "40px" }}>/techSkills</span>
            <span style={{ marginRight: "40px" }}>/sideProjects</span>
            <span style={{ marginRight: "40px" }}>/blogs</span>
          </div> */}
        </div>
      </main>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
import About from "../components/about";
import { SOCIAL_LINKS } from "../utils/links";
import { Link, animateScroll as scroll } from "react-scroll";
import WorkExperience from "../components/workExperience";
import Footer from "../components/footer";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const currentTime = () => {
  return new Date().toLocaleTimeString(undefined, {
    timeZone: "Asia/Kolkata",
    hour12: false,
  });
};

export default function Home() {
  const [time, setTime] = useState(currentTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(currentTime());
    }, 1000);
  });

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
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BJ96LSKFFB"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BJ96LSKFFB');
        `,
          }}
        />
      </Head>
      <main className={styles.main}>
        <div className="LogoNav">
          <span className="gradientText">Sourav Dey</span>
        </div>
        {/* Social Media Links in desktop */}
        <div className={styles.socialIcons}>
          {SOCIAL_LINKS.map((link) => (
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <Image src={link.image} width={36} height={36} />
              <p className={styles.socialIconsText}>
                {link.href.replace("https://", "").replace("mailto:", "")}
              </p>
            </a>
          ))}
        </div>
        <div className="navigation">
          <div>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              /aboutMe
            </Link>
          </div>
          <div>
            <Link
              activeClass="active"
              to="workExperience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              /workExperience
            </Link>
          </div>
          <div>
            <Link
              activeClass="active"
              to="techSkills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              /techSkills
            </Link>
          </div>
        </div>
        <div className="body">
          <div>
            <About />
            <WorkExperience/>
            
            {/* techSkills */}
            <div id="techSkills">
            <p
              style={{
                marginTop: "3rem",
                textAlign: "right",
                fontWeight: "bold",
              }}
            >
              /techSkills
            </p>
            <p
              style={{
                marginTop: "3rem",
                fontWeight: "bold",
                fontSize: "0.75rem",
              }}
            >
              git checkout{" "}
              <span className="gradientText">Technical Skills</span>
            </p>
            <div
              style={{
                marginTop: "3rem",
                fontSize: "1rem",
                fontWeight: "bold",
                display: "flex",
                flexFlow: "row wrap",
              }}
            >
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>HTML5</span>
                {/* <span style={{ padding: "0rem 0.5rem" }}>+</span>
                <span style={{ padding: "0rem 0.5rem" }}>|</span>
                <span style={{ padding: "0rem 0.5rem" }}>12</span> */}
              </div>
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>CSS3</span>
              </div>
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>JavaScript</span>
              </div>
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>React.js</span>
              </div>
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>Next.js</span>
              </div>
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>Node.js</span>
              </div>
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>Express.js</span>
              </div>
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>MongoDB</span>
              </div>
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>SQL</span>
              </div>
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>Java</span>
              </div>
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>Python</span>
              </div>
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>firebase</span>
              </div>
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>Google CLoud</span>
              </div>
              
            </div>
            </div>


            {/* footer */}
            <Footer time={time}/>
          </div>
        </div>
      </main>
    </div>
  );
}

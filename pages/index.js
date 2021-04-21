import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
import About from "../components/about";
import { ROUTES } from "../utils/routes";
import Clog from "@souravdey/colored-console";
import { SOCIAL_LINKS } from "../utils/links";
import { Link, animateScroll as scroll } from "react-scroll";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const currentTime = () => {
  return new Date().toLocaleTimeString(undefined, {
    timeZone: "Asia/Kolkata",
    hour12: false,
  });
};

export default function Home() {
  // const myRef = useRef(null);
  // const executeScroll = () => scrollToRef(myRef);
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
        <div className="LogoNav" style={{ fontWeight: "bold" }}>
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
        </div>
        <div className="body">
          <div>
            <About />
            <div style={{ marginTop: "3rem" }}>
              <Image src="/images/dots.png" width={190} height={64} />
            </div>
            <p
              id="workExperience"
              style={{
                marginTop: "3rem",
                textAlign: "right",
                fontWeight: "bold",
              }}
            >
              /workExperience
            </p>
            <p
              style={{
                marginTop: "3rem",
                fontWeight: "bold",
                fontSize: "0.75rem",
              }}
            >
              git checkout <span className="gradientText">WORK EXPERIENCE</span>
            </p>
            <p
              className="gradientText"
              style={{
                marginTop: "3rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              <span className="gradientText">TATA CONSULTANCY SERVICES</span>
            </p>
            <div style={{ fontSize: "1rem" }}>
              <span className="gradientText">Full Stack Developer</span>
            </div>
            Sept 2018 - Present
            <br />
            <br />
            <p>
              Worked in multiple Projects and Technologies while gaining
              Proficiency in HTML, CSS, JavaScript, React.js & React Native,
              Express.js Node.js.
              <br />
              <br />
              Proficient with concepts of Single Page Applications, Progressive
              Web Applications, Rest APIs, and Google Cloud.
              <br />
              <br />
              Created User Stories, developed highly impactful app both mobile
              and web with that also contributed to Product marketing strategies
              and UX designing
              <br />
              <br />
              Mentored Full-Stack Development Internship for undergrad students.
              <br />
              <br />
              <b className="gradientText">Awards</b>
              <br />
              - Special Initiative Award (For Developing TCS CLICKFIT)
              <br />
              - CSR Special Initiative Award (For Mentoring an Internship)
              <br />- Special Initiative Award
              <br />- Applause for Team Award
              <br />- On the Spot Award (For Developing AIA INSURANCE WEB
              PORTAL)
              <br />- Fresco Play Learning Award
            </p>
            {/* <div className="projectTest">this is test</div> */}
            <p
              className="gradientText"
              style={{
                marginTop: "3rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              <span className="gradientText">
                INDIAN OIL CORPORATION LIMITED (IOCL)
              </span>
            </p>
            <div style={{ fontSize: "1rem" }}>
              <span className="gradientText">Software Developer Intern</span>
            </div>
            Jul 2017 – Aug 2017
            <br />
            <br />
            <p>
              Gained experience with Database Modeling, Understanding of SAP
              software, and Network Schema of IOCL.
              <br />
              <br />
              INVENTORY MANAGEMENT SYSTEM | JAVA (SWING), SQL
              <br />A System Software for Managing Inventory, Stocks, Sales,
              Purchase, and Reports
            </p>
            <p
              className="gradientText"
              style={{
                marginTop: "3rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              <span className="gradientText">HEWLETT-PACKARD (HP)</span>
            </p>
            <div style={{ fontSize: "1rem" }}>
              <span className="gradientText">Android Developer Trainee</span>
            </div>
            Jul 2016 – Aug 2016
            <br />
            <br />
            <p>
              Skill-building Experience in Java SE & Android while completing
              various assignments and projects.
            </p>
            <div
              style={{
                marginTop: "3rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Image src="/images/dots.png" width={190} height={64} />
              <div className="animatedCircle"></div>
            </div>
            {/* techSkills */}
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
                <span style={{ padding: "0rem 0.5rem" }}>HTML</span>
                {/* <span style={{ padding: "0rem 0.5rem" }}>+</span>
                <span style={{ padding: "0rem 0.5rem" }}>|</span>
                <span style={{ padding: "0rem 0.5rem" }}>12</span> */}
              </div>
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>CSS</span>
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
                <span style={{ padding: "0rem 0.5rem" }}>firebase</span>
              </div>
              <div className="skill">
                <span style={{ padding: "0rem 0.5rem" }}>Google CLoud</span>
              </div>
            </div>
            <div
              style={{
                marginTop: "5rem",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.75rem",
              }}
            >
              <div>
                <span className="gradientText">© 2021 Sourav Dey</span>
                <br />
                <br />
                Built with <span className="gradientText">Next.js</span>
                <br />
                Bangalore, India • {time}
              </div>
              <span className="gradientText">Souravdey.Space</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useRef } from "react";
import Link from "next/link";
import About from '../components/about'
import { ROUTES } from "../utils/routes";
import Clog from '@souravdey/colored-console'
import { SOCIAL_LINKS } from "../utils/links";


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
          <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
            <span className="gradientText">Sourav Dey</span>
          </div>
        </div>
      {/* Social Media Links in desktop */}
      <div className={styles.socialIcons}>
        {SOCIAL_LINKS.map((link) => (
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            <Image src={link.image} width={36} height={36} />
            <p className={styles.socialIconsText}>{link.href.replace("https://","").replace("mailto:","")}</p>
          </a>
        ))}
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

            <About/>
            <p  ref={myRef} style={{ marginTop: "3rem", textAlign: "right", fontWeight: "bold" }}>
              /workExperience
            </p>
            <p style={{ marginTop: "3rem", fontWeight: "bold",fontSize: "0.75rem", }}>
              git checkout -b “ <span className="gradientText">WORK EXPERIENCE</span> ”
            </p>
            <p className="gradientText" style={{ marginTop: "3rem", fontSize: "1rem", fontWeight: "bold" }}>
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

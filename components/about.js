import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SOCIAL_LINKS } from "../utils/links";

export default function About() {
  return (
    <div id="about">
      <div className="test" style={{ textAlign: "right" }}>
        <Image src="/images/dots.png" width={190} height={64} />
      </div>
      <div className="qoutes" style={{ marginTop: "3rem" }}>
        <Image src="/images/qoutes.svg" width={100} height={100} />
      </div>
      <p className="gradientText largeText" 
      style={{
        marginTop: "3rem"
      }}>
        Hi Sourav here,
        <br />
        I'm a
        <br />
        Full Stack Developer
      </p>
      <p className={styles.intro}>
        I am a <b className="gradientText">passionate learner</b> having a keen
        interest in collaborating to build digital solutions that{" "}
        <b className="gradientText">solve real-world problems</b>. I'm also a
        design thinking facilitator and a user-centric developer who believes
        that the merger between Design Thinking and Digital Technologies will
        lead to the building of user-centered solutions that are impactful
        toward the betterment of business and society.
      </p>
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* <Image src="/Cursor.svg" width={50} height={50} /> */}
        <div className="animatedCircle"></div>
        <Image src="/images/tagline.png" width={230} height={50} />
      </div>

      {/* Social Media Links in mobile */}
      <div className={styles.socialIconsMobile}>
        {SOCIAL_LINKS.map((link, key) => (
          <a
            href={link.href}
            key={key}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={link.image} width={36} height={36} />
          </a>
        ))}
      </div>
      <div style={{ marginTop: "3rem" }}>
        <Image src="/images/dots.png" width={190} height={64} />
      </div>
    </div>
  );
}

import React from "react";
import Heading from "../heading/heading";
import Image from "next/image";
import styles from "./intro.module.css";

function Intro(props) {
  return (
    <div className={styles.introRoot}>
      <div className={styles.segment2}>
        <div>
          <Heading>Sourav Dey</Heading>
          <p>
            👋 Hey, I'm a 24 yrs. old, <b>Full Stack Software Developer</b> from West
            Bengal, India.
          </p>
        </div>
        <div className={styles.profilePicBackgroundOutter}>
          <div className={styles.profilePicBackgroundInner}>
            <Image
              src="/images/profilepic.png"
              width={150}
              height={150}
              alt="Sourav Dey"
            />
          </div>
        </div>
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
      {/* <div className={styles.line}></div> */}
      <p style={{marginBottom:"100px"}}>
        I am a <b>passionate learner</b> having a keen interest in collaborating
        and empowering teams to build digital solutions that solve real-world
        problems. I'm also a design thinking facilitator and a <b>user-centric
        developer</b> who believes that the merger between Design Thinking and
        Digital Technologies will lead to the building of user-centered
        solutions that are impactful toward the betterment of business and
        society.
      </p>

    </div>
  );
}

export default Intro;

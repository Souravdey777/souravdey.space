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
            Hi, I'm 24 yrs. 👋 <b>Full Stack Software Developer</b> from West
            Bengal, India.
          </p>
        </div>
        <div className={styles.profilepic}>
          <div className={styles.profilepic2}>
            <Image
              src="/images/profilepic.png"
              width={150}
              height={150}
              alt="Sourav Dey"
            />
          </div>
        </div>
      </div>
      <div  style={{maxWidth:"768px"}} className={styles.socialIcons}>
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


      {/* <div className={styles.line}></div> */}
    </div>
  );
}

export default Intro;

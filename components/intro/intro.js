import React from 'react';
import Heading from '../heading/heading';
import Image from 'next/image'
import styles from './intro.module.css'


function Intro(props) {
    return (
        <div>
            <Heading>Sourav</Heading>
            <div className={styles.segment2}>
                <Heading>Dey</Heading>
                <div className={styles.profilepic}>
                    <div className={styles.profilepic2}>
                        <Image src='/images/profilepic.png' width={150} height={150} alt="Sourav Dey" />
                    </div>
                </div>
            </div>
            <div className={styles.socialIcons}>
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
                <br/>
                <br/>
            <div className={styles.line}></div>
                <br/>
                <br/>
                <div>Hi, I'm 24 yrs. <b>Full Stack Software Developer</b> from West Bengal, India.</div>
                <br/>
                <br/>
                <div>
I am a <b>passionate learner</b> having a keen interest in collaborating and empowering teams to build digital solutions that solve real-world problems. I'm also a design thinking facilitator and a user-centric developer who believes that the merger between Design Thinking and Digital Technologies will lead to the building of user-centered solutions that are impactful toward the betterment of business and society.

                </div>
        </div>
    );
}

export default Intro;
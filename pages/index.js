import Head from 'next/head'
import Intro from '../components/intro/introOld.js'
import styles from '../styles/Home.module.css'
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* HTML Head Tag */}
      <Head>
        <title>Sourav Dey</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
      </Head>

      {/* Website Body */}
      <main className={styles.main}>
        <Intro />
      </main>
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 40" ><path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path></svg> */}
      {/* <div style={{ background: "white", height: "1500px", marginTop:"-1px" }}> */}
        {/* <FadeInSection>
          <div style={{ background: "white", minHeight:"500px", padding: "2rem", borderRadius: "20px", border: "1px solid #8193b277", boxShadow: "#00000022 0px 15px 15px", margin: " 0 1rem", color: "#627597" }} >
            <p style={{ maxWidth: "768px" }}>
              I am a <b>passionate learner</b> having a keen interest in collaborating
        and empowering teams to build digital solutions that solve real-world
        problems. I'm also a design thinking facilitator and a <b>user-centric
        developer</b> who believes that the merger between Design Thinking and
        Digital Technologies will lead to the building of user-centered
        solutions that are impactful toward the betterment of business and
        society.
      </p>
          </div>
        </FadeInSection> */}
{/*          
        <FadeInSection>
          <div style={{ background: "white", minHeight:"500px", padding: "2rem", borderRadius: "20px", border: "1px solid #8193b277", boxShadow: "#00000022 0px 15px 15px", margin: "10rem 15rem", color: "#627597" }} >
            <p style={{ maxWidth: "768px" }}>
              I am a <b>passionate learner</b> having a keen interest in collaborating
        and empowering teams to build digital solutions that solve real-world
        problems. I'm also a design thinking facilitator and a <b>user-centric
        developer</b> who believes that the merger between Design Thinking and
        Digital Technologies will lead to the building of user-centered
        solutions that are impactful toward the betterment of business and
        society.
      </p>
          </div>
        </FadeInSection> */}
      {/* </div> */}


      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={` ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}


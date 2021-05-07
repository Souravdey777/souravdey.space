import React from "react";
import Image from "next/image";

export default function TechSkills() {
  return (
    <div id="techSkills">
      {/* techSkills */}
      <p
        style={{
            paddingTop: "3rem",
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
        git checkout <span className="gradientText">Technical Skills</span>
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
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="animatedCircle" />
        <Image src="/images/dots.png" width={190} height={64} />
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";

export default function WorkExperience() {
  return (
    <div id="workExperience">
      <p
        style={{
          marginTop: "3rem",
          textAlign: "right",
          fontWeight: "900",
        }}
      >
        /workExperience
      </p>
      <p
        style={{
          marginTop: "3rem",
          fontWeight: "900",
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
          fontWeight: "900",
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
        Worked in multiple Projects and Technologies while gaining Proficiency
        in HTML, CSS, JavaScript, React.js & React Native, Express.js Node.js.
        <br />
        <br />
        Proficient with concepts of Single Page Applications, Progressive Web
        Applications, Rest APIs, and Google Cloud.
        <br />
        <br />
        Created User Stories, developed highly impactful app both mobile and web
        with that also contributed to Product marketing strategies and UX
        designing
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
        <br />- On the Spot Award (For Developing AIA INSURANCE WEB PORTAL)
        <br />- Fresco Play Learning Award
      </p>
      {/* <div className="projectTest">this is test</div> */}
      <p
        className="gradientText"
        style={{
          marginTop: "3rem",
          fontSize: "1rem",
          fontWeight: "900",
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
        Gained experience with Database Modeling, Understanding of SAP software,
        and Network Schema of IOCL.
        <br />
        <br />
        INVENTORY MANAGEMENT SYSTEM | JAVA (SWING), SQL
        <br />A System Software for Managing Inventory, Stocks, Sales, Purchase,
        and Reports
      </p>
      <p
        className="gradientText"
        style={{
          marginTop: "3rem",
          fontSize: "1rem",
          fontWeight: "900",
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
        Skill-building Experience in Java SE & Android while completing various
        assignments and projects.
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
    </div>
  );
}

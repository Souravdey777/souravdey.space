import React from "react";

export default function Footer(props) {
  return (
    <div
      style={{
        marginTop: "30rem",
        fontWeight: "900",
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
        Bangalore, India • {props.time}
      </div>
      <span className="gradientText">Souravdey.Space</span>
    </div>
  );
}

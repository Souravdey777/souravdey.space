import React, { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState(currentTime());

  function currentTime() {
    return new Date().toLocaleTimeString(undefined, {
      timeZone: "Asia/Kolkata",
      hour12: false,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setTime(currentTime());
    }, 1000);
  });

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
        Bangalore, India • {time}
      </div>
      <span className="gradientText">Souravdey.Space</span>
    </div>
  );
}

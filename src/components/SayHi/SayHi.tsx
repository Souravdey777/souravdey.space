import React from "react";
import Image from "next/image";

import styles from "@/app/page.module.css";
import { Anchor, HighLightedText, ProfilePic } from "@/components";
import qoutesDI from "@/assets/qoutesDI.svg";

function SayHi() {
  return (
    <section className={styles.fullHeightContainer70}>
      <div className={styles.imageContainer}>
        {/* Decorative Image */}
        <Image src={qoutesDI} width={96} height={96} alt="" />
        {/* Profile Image */}
        <ProfilePic />
      </div>
      <h1 className={styles.bigText}>
        Hi! I am <HighLightedText>Sourav</HighLightedText>,
        <br />a{" "}
        <HighLightedText>
          Software
          <br />
          Developer
        </HighLightedText>
      </h1>
      <p>
        Occasionally <strong>Designer</strong> | 
        <strong>Blogger</strong> | <strong>Mentor</strong>
      </p>
      <p>
        Currenty the website is being revamped. 😭
        <br />
        <strong>Will be ready by 20th June, 2023</strong>
      </p>
    </section>
  );
}

export default SayHi;

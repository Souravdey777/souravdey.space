import React from "react";
import Image from "next/image";

import styles from "@/app/page.module.css";
import { HighLightedText, ProfilePic } from "@/components";
import qoutesDI from "@/assets/qoutesDI.svg";
import Link from "next/link";

import { SiCodersrank } from "@icons-pack/react-simple-icons";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

function SayHi() {
  return (
    <section className={styles.fullHeightContainer}>
      <div className={styles.imageContainer}>
        {/* Decorative Image */}
        <Image src={qoutesDI} width={96} height={96} alt="" priority />
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
      <strong
        className={styles.linkList}
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <Link target="_blank" href="https://github.com/Souravdey777/">
          <Github color="var(--foreground-hex-intense)" size={24} />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/souravdey777/">
          <Linkedin color="var(--foreground-hex-intense)" size={24} />
        </Link>
        <Link target="_blank" href="https://www.youtube.com/@techWithSD">
          <Youtube color="var(--foreground-hex-intense)" size={24} />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/souravdey777">
          <Instagram color="var(--foreground-hex-intense)" size={24} />
        </Link>
        <Link
          target="_blank"
          href="https://profile.codersrank.io/user/souravdey777"
        >
          <SiCodersrank
            title="Codersrank"
            color="var(--foreground-hex-intense)"
            size={24}
          />
        </Link>
      </strong>
      <strong className={styles.linkList}>
        <Link
          className={styles.linkBtn}
          target="_blank"
          href="https://cal.com/souravdey/quick-chat"
        >
          Book: Quick 15-Mins 1:1 ⚡️ &#8594;
        </Link>
        {/* <Link target="_blank" href="https://souravdey.substack.com/">
          Subscribe to Dev Decoded &#8594;
        </Link> */}
      </strong>
    </section>
  );
}

export default SayHi;

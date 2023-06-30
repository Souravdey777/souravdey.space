import React from "react";
import Image from "next/image";

import styles from "@/app/page.module.css";
import { Anchor, HighLightedText, ProfilePic } from "@/components";
import qoutesDI from "@/assets/qoutesDI.svg";
import Link from "next/link";

import {
  SiCodersrank,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

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
          <SiGithub
            title="Github"
            color="var(--foreground-hex-intense)"
            size={24}
          />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/souravdey777/">
          <SiLinkedin
            title="LinkedIn"
            color="var(--foreground-hex-intense)"
            size={24}
          />
        </Link>
        <Link target="_blank" href="https://www.youtube.com/@techWithSD">
          <SiYoutube
            title="YouTube"
            color="var(--foreground-hex-intense)"
            size={24}
          />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/souravdey777">
          <SiInstagram
            title="Instagram"
            color="var(--foreground-hex-intense)"
            size={24}
          />
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
        <Link target="_blank" href="https://cal.com/souravdey/quick-chat">
          Quick 15-Mins 1:1 ⚡️ &#8594;
        </Link>
        <Link target="_blank" href="https://souravdey.substack.com/">
          Get email upadtes &#8594;
        </Link>
      </strong>
    </section>
  );
}

export default SayHi;

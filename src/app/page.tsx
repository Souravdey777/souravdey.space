import Intro from "@/content/intro.mdx";
import styles from "@/app/page.module.css";

import {
  Anchor,
  HighLightedText,
  IntenseText,
  MdxWrapper,
  ProfilePic,
  Signature,
} from "@/components";

import Image from "next/image";

import qoutesDI from "@/assets/qoutesDI.svg";

export default function Page() {
  return (
    <main className={styles.main}>
      <section className={styles.helloWorld}>
        <div className={styles.imageContainer}>
          {/* Decorative Image */}
          <Image src={qoutesDI} width={96} height={96} alt="" />
          {/* Profile Image */}
          <ProfilePic />
        </div>
        <h1 className={styles.bigText}>
          <IntenseText>
            Hi <HighLightedText>Sourav</HighLightedText>
            <br />
            here,
            <br />
            I‘m a
            <br />
            <HighLightedText>
              Software
              <br />
              Developer
            </HighLightedText>
          </IntenseText>
        </h1>
      </section>
      {/* Small About Me */}
      <MdxWrapper withoutBack withoutProgress>
        <Intro />
        <Signature />
        <Anchor href="/aboutMe">Know more about me &#8594;</Anchor>
        <div className={styles.linkList}>
          <Anchor href="/aboutMe/workingWithMe">/workingWithMe &#8594;</Anchor>
          <Anchor href="/aboutMe/socialPresence">
            /socialPresence &#8594;
          </Anchor>
          <Anchor href="/aboutMe/productivityTools">
            /productivityTools &#8594;
          </Anchor>
          <Anchor href="/contactMe">/contactMe &#8594;</Anchor>
        </div>
      </MdxWrapper>
    </main>
  );
}

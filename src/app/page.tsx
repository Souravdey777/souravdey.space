import Intro from "@/content/intro.mdx";
import styles from "@/app/page.module.css";

import {
  Anchor,
  DecorativeContent,
  HighLightedText,
  MdxWrapper,
  ProfilePic,
  ProgressWrapper,
  SayHi,
  Signature,
} from "@/components";

export default function Page() {
  return (
    <main className={styles.main}>
      <ProgressWrapper>
        <SayHi />
        {/* Small About Me */}
        <MdxWrapper withoutBack withoutProgress>
          <Intro />
          <Signature />
          <strong className={styles.linkList}>
            <Anchor href="/aboutMe">/myStory &#8594;</Anchor>
            <Anchor href="/aboutMe/workingWithMe">
              /workingWithMe &#8594;
            </Anchor>
            <Anchor href="/aboutMe/socialPresence">
              /socialPresence &#8594;
            </Anchor>
            <Anchor href="/aboutMe/productivityTools">
              /productivityTools &#8594;
            </Anchor>
            <Anchor href="mailto:piyush.kolkata@gmail.com">/sayHi ✉️ </Anchor>
          </strong>
          <DecorativeContent />
        </MdxWrapper>
      </ProgressWrapper>
    </main>
  );
}

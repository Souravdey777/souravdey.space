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
import Link from "next/link";
import clsx from "clsx";
import { roboto } from "./fonts";

export default function Page() {
  return (
    <main className={styles.main}>
      <ProgressWrapper>
        <SayHi />
        {/* Small About Me */}
        <MdxWrapper withoutBack withoutProgress>
          <Intro />
          <Signature />
          <strong className={clsx(styles.linkList, roboto.className)}>
            <Link href="/aboutMe">/myStory🙋🏻‍♂️ &#8594;</Link>
            {/* <Link href="/aboutMe/workingWithMe">/workingWithMe &#8594;</Link> */}
            <Link href="/aboutMe/socialPresence">/socialPresence &#8594;</Link>
            {/* <Link href="/aboutMe/productivityTools">
              /productivityTools &#8594;
            </Link> */}
            <Link href="mailto:piyush.kolkata@gmail.com">/sayHi ✉️ </Link>
          </strong>
          <DecorativeContent />
        </MdxWrapper>
      </ProgressWrapper>
    </main>
  );
}

import Intro from "@/content/intro.mdx";
import styles from "@/app/page.module.css";

import {
  DecorativeContent,
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
        <div className={styles.fullHeightContainer}>
          <Intro />
          <Signature />
          <strong className={clsx(styles.linkList, roboto.className)}>
            <Link href="/aboutMe">/aboutMe</Link>
            {/* <Link href="/aboutMe/workingWithMe">/workingWithMe</Link>
            <Link href="/aboutMe/socialPresence">/socialPresence</Link>
            <Link href="/aboutMe/productivityTools">/productivityTools</Link> */}
            <a href="mailto:piyush.kolkata@gmail.com">/mailMe</a>
          </strong>
          <DecorativeContent />
        </div>
      </ProgressWrapper>
    </main>
  );
}

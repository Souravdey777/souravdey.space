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
        <div className={styles.mdxWrapperContent}>
          <Intro />
          <Signature />
          <strong className={clsx(styles.linkList, roboto.className)}>
            <Link href="/aboutMe">/aboutMe &#8594;</Link>
            <a href="mailto:piyush.kolkata@gmail.com">/mailMe &#8594;</a>
          </strong>
          <DecorativeContent />
        </div>
      </ProgressWrapper>
    </main>
  );
}

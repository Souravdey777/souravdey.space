import Intro from "@/content/intro.mdx";
import styles from "@/app/page.module.css";

import {
  DecorativeContent,
  ProgressWrapper,
  SayHi,
  Signature,
} from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <main className={styles.main}>
      <ProgressWrapper>
        <SayHi />
        {/* Small About Me */}
        <div className={styles.mdxWrapperContent}>
          <Intro />
          <Signature />
          <strong className={styles.linkList}>
            <Link className={styles.linkBlue} href="/aboutMe">
              /aboutMe
            </Link>
            <a
              className={styles.linkBlue}
              href="mailto:piyush.kolkata@gmail.com"
            >
              /emailMe
            </a>
          </strong>
          <DecorativeContent />
        </div>
      </ProgressWrapper>
    </main>
  );
}

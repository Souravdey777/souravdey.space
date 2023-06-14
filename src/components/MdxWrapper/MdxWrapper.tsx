import React from "react";
import styles from "@/app/page.module.css";
import { Anchor, ProgressWrapper } from "@/components";

export default function MdxWrapper({
  children,
  withoutBack = false,
  withoutProgress = false,
}: {
  children: React.ReactNode;
  withoutBack?: boolean;
  withoutProgress?: boolean;
}) {
  return (
    <main className={styles.main}>
      <ProgressWrapper disabled={withoutProgress}>
        <article className={styles.mdxWrapper}>
          {!withoutBack && (
            <Anchor className="" href="/">
              &#8592; Back
            </Anchor>
          )}
          {children}
        </article>
      </ProgressWrapper>
    </main>
  );
}

import React from "react";
import styles from "@/app/page.module.css";
import { ProgressWrapper } from "@/components";
import Link from "next/link";

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
            <Link className="" href="/">
              &#8592; Back
            </Link>
          )}
          {children}
        </article>
      </ProgressWrapper>
    </main>
  );
}

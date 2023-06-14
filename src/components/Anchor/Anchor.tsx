import { roboto } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import styles from "./Anchor.module.css";
import clsx from "clsx";

function Anchor({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return (
    <Link className={clsx(className, roboto.className, styles.a)} href={href}>
      {children}
    </Link>
  );
}

export default Anchor;

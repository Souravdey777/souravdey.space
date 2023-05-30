import { roboto } from "@/app/fonts";
import classNames from "classnames";
import Link from "next/link";
import React from "react";

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
    <Link className={classNames(className, roboto.className)} href={href}>
      {children}
    </Link>
  );
}

export default Anchor;

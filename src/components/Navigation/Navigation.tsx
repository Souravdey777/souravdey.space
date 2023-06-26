"use client";

import { usePathname } from "next/navigation";
import { navLinks } from "@/routes";

import {
  motion,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import styles from "./Navigation.module.css";
import { useEffect } from "react";
import Link from "next/link";

function Navigation() {
  const pathname = usePathname();

  const { scrollY } = useScroll();

  const controls = useAnimationControls();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest);
    // if (latest > 250) {
    //   controls.start({ x: "-10rem" });
    // } else {
    //   controls.start({ x: "0" });
    // }
  });

  useEffect(() => {
    controls.start({ x: "0" });
  });

  return (
    <nav className={styles.nav}>
      {navLinks?.map((link, index) => {
        const isActive = pathname.startsWith(link.url);
        return (
          <motion.div animate={controls} key={`${link.name}-${index}`}>
            <Link
              className={isActive ? styles.linkBlue : styles.linkWhite}
              href={link.url}
            >
              {link.name}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}

export default Navigation;

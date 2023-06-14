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
import Anchor from "../Anchor/Anchor";
import { useEffect } from "react";

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
            {isActive ? (
              <Anchor className={styles.linkBlue} href="/">
                {link.name}
              </Anchor>
            ) : (
              <Anchor
                className={isActive ? styles.linkBlue : styles.linkWhite}
                href={link.url}
              >
                {link.name}
              </Anchor>
            )}
          </motion.div>
        );
      })}
    </nav>
  );
}

export default Navigation;

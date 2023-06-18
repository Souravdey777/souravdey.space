import { usePathname } from "next/navigation";
import { navLinks } from "@/routes";

import { motion } from "framer-motion";

import styles from "./Navigation.module.css";
import Anchor from "../Anchor/Anchor";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import clsx from "clsx";
import { roboto } from "@/app/fonts";

function MobileNavigation({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();

  return (
    <nav className={styles.navMobile}>
      {navLinks?.map((link, index) => {
        const isActive = pathname.startsWith(link.url);
        return (
          <motion.div key={`${link.name}-${index}`}>
            <Link
              className={styles.linkBlue}
              href={link.url}
              onClick={() => setOpen(false)}
            >
              <h2>{link.name}</h2>
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}

export default MobileNavigation;

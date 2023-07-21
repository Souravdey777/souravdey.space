import { usePathname } from "next/navigation";
import { navLinks } from "@/routes";

import { motion } from "framer-motion";

import styles from "./Navigation.module.css";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
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
          <motion.div
            className={roboto.className}
            key={`${link.name}-${index}`}
          >
            <Link
              className={isActive ? styles.linkBlue : styles.linkWhite}
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

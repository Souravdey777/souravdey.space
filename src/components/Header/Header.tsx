"use client";
import React, { useState } from "react";
import Menu from "../Navigation/Menu";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";
import MobileNavigation from "../Navigation/MobileNavigation";
import Link from "next/link";

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <div className={styles.fixedHeader}>
        <Link href="/">
          <strong className={styles.linkWhite}>Sourav Dey</strong>
        </Link>
        <Menu isOpen={isOpen} setOpen={setOpen} />
      </div>
      <Navigation />
      {isOpen && <MobileNavigation setOpen={setOpen} />}
    </header>
  );
}

export default Header;

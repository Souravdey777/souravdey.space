"use client";
import React, { useState } from "react";
import Menu from "../Navigation/Menu";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";
import MobileNavigation from "../Navigation/MobileNavigation";

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <div className={styles.fixedHeader}>
        <strong>Sourav Dey</strong>
        <Menu isOpen={isOpen} setOpen={setOpen} />
      </div>
      <Navigation />
      {isOpen && <MobileNavigation setOpen={setOpen} />}
    </header>
  );
}

export default Header;

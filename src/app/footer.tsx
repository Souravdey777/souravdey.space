"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import { roboto } from "./fonts";
import { Anchor } from "@/components";

export default function Footer() {
  const [time, setTime] = useState(currentTime());

  function currentTime() {
    return new Date().toLocaleTimeString(undefined, {
      timeZone: "Asia/Kolkata",
      hour12: false,
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setTime(currentTime());
    }, 1000);
  });

  return (
    <footer className={styles.fixedFooter}>
      <p>
        Built with <Anchor href="https://nextjs.org/">NextJs</Anchor>
      </p>
      <p className={roboto.className}>India / {time}</p>
    </footer>
  );
}

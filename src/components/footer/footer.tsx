"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import { roboto } from "@/app/fonts";
import Link from "next/link";

export default function Footer() {
  const [time, setTime] = useState("");

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
        Built with{" "}
        <Link href="https://nextjs.org/" target="_blank">
          NextJs
        </Link>
      </p>
      <p className={roboto.className}>India / {time}</p>
    </footer>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./ProfilePic.module.css";
import profilePic from "@/assets/profilepic.png";

function ProfilePic() {
  return (
    <motion.div
      className={styles.imageMotionContainer}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Image
        src={profilePic}
        width={125}
        height={154}
        alt="Sourav Dey: Profile Pic"
      />
    </motion.div>
  );
}

export default ProfilePic;

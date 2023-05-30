import React from "react";
import styles from "./intenseText.module.css";

const IntenseText = ({ children }: { children: React.ReactNode }) => {
  return <span className={styles.intenseText}>{children}</span>;
};

export default IntenseText;

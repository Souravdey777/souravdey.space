import React from "react";
import styles from "./HighLightedText.module.css";

const HighLightedText = ({ children }: { children: React.ReactNode }) => {
  return <span className={styles.highLightedText}>{children}</span>;
};

export default HighLightedText;

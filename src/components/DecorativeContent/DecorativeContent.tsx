import React from "react";
import styles from "./DecorativeContent.module.css";
import HighLightedText from "../HighLightedText/HighLightedText";
import { permanentMarker } from "@/app/fonts";
import clsx from "clsx";

function DecorativeContent() {
  return (
    <div className={styles.decorativeContent}>
      <div className={styles.animatedCircle} />
      <h3
        className={clsx(
          permanentMarker.className,
          styles.decorativeContentText
        )}
      >
        <HighLightedText>
          Designing and
          <br /> Developing Future
        </HighLightedText>
      </h3>
    </div>
  );
}

export default DecorativeContent;

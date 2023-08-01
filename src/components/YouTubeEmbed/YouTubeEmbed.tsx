import React from "react";
import styles from "./YoutubeEmbed.module.css";

function YouTubeEmbed({
  slugHash,
  portraitMode = false,
}: {
  slugHash: string;
  portraitMode: boolean;
}) {
  return (
    <iframe
      className={styles.ytplayer}
      id="ytplayer"
      src={`https://www.youtube.com/embed/${slugHash}`}
      style={
        portraitMode
          ? {
              height: "540px",
            }
          : {}
      }
    />
  );
}

export default YouTubeEmbed;

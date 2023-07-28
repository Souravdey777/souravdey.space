import React from "react";

function YouTubeEmbed({
  slugHash,
  portraitMode = false,
}: {
  slugHash: string;
  portraitMode: boolean;
}) {
  return (
    <iframe
      id="ytplayer"
      width="100%"
      height={portraitMode ? "540" : "420"}
      src={`https://www.youtube.com/embed/${slugHash}`}
      style={{
        border: "none",
        borderRadius: '4px',
        outline: "none",
      }}
    />
  );
}

export default YouTubeEmbed;

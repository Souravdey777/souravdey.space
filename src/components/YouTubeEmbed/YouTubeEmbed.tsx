import React from "react";

function YouTubeEmbed({ slugHash }: { slugHash: string }) {
  return (
    <iframe
      id="ytplayer"
      width="100%"
      height="540"
      src={`https://www.youtube.com/embed/${slugHash}?autoplay=1&origin=http://example.com`}
    />
  );
}

export default YouTubeEmbed;

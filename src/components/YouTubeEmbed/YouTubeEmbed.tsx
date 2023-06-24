import React from "react";

function YouTubeEmbed({ link }: { link: string }) {
  return (
    <iframe
      id="ytplayer"
      width="100%"
      height="540"
      src={`https://www.youtube.com/embed/${link}?autoplay=1&origin=http://example.com`}
    />
  );
}

export default YouTubeEmbed;

import React from "react";
import Image from "next/image";

function Img({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={!width && !height}
    />
  );
}

export default Img;

import Image from "next/image";
import React from "react";
import styles from "./ImageGrid.module.css";

interface ImageObjType {
  src: string;
  alt: string;
}

function ImageGrid({ imageMap }: { imageMap: Array<any> }) {
  return (
    <div className={styles.imageGrid}>
      {imageMap?.map(
        ({
          src,
          alt,
          width = "300px",
        }: {
          src: string;
          alt: string;
          width: string;
        }) => (
          <Image
            key={`image-${alt}`}
            width={300}
            height={0}
            src={src}
            alt={alt}
            style={{
              width: `${width}`,
              height: "auto",
            }}
          />
        )
      )}
    </div>
  );
}

export default ImageGrid;

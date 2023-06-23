"use client";
import clsx from "clsx";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface mxdComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  // src: string;
}

function MdxImg({ className, ...props }: mxdComponentProps) {
  const [scope, animate] = useAnimate();
  const [islarge, setlarge] = useState(false);

  const onClickLarge = () => {
    if (!islarge) {
      animate(scope.current, { scale: 2 });
      setlarge(!islarge);
    } else {
      animate(scope.current, { scale: 1 });
      setlarge(!islarge);
    }
  };

  return (
    <motion.div ref={scope} onClick={onClickLarge}>
      <img
        // src={src}
        // alt={alt}
        className={clsx(className, "mdx-img")}
        {...props}
      />
    </motion.div>
  );
}

export default MdxImg;

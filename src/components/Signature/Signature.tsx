import React from "react";
// import signLight from "@/assets/sign-light.svg";
// import signDark from "@/assets/sign-dark.png";
import { Img } from "@/components";

function Signature() {
  return (
    <picture>
      <source srcSet="/sign-dark.png" media="(prefers-color-scheme: dark)" />
      <Img src="/sign-light.png" alt="Signature" height={100} width={150} />
    </picture>
  );
}

export default Signature;

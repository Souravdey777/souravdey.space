import { MdxWrapper } from "@/components";
import React from "react";
import ReactJsResources from "@/content/resources/react-js.mdx";

export const metadata = {
  title: "ReactJs Resources | Sourav Dey",
};

function page() {
  return (
    <MdxWrapper withoutBack>
      <ReactJsResources />
    </MdxWrapper>
  );
}

export default page;

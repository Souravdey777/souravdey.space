import React from "react";

import { MdxWrapper } from "@/components";
import JavaScriptResources from "@/content/resources/javascript.mdx";

export const metadata = {
  title: "JavaScript Resources | Sourav Dey",
};

function page() {
  return (
    <MdxWrapper withoutBack>
      <JavaScriptResources />
    </MdxWrapper>
  );
}

export default page;

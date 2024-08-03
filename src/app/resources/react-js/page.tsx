import { MdxWrapper } from "@/components";
import React from "react";
import Resources from "@/content/resources/react-js.mdx";

export const metadata = {
  title: "ReactJs Resources | Sourav Dey",
};

function page() {
  return (
    <MdxWrapper withoutBack>
      <Resources />
    </MdxWrapper>
  );
}

export default page;

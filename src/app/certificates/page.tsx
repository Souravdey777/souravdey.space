import { MdxWrapper } from "@/components";
import React from "react";
import Certificates from "@/content/certificates.mdx";

export const metadata = {
  title: "Certificates | Sourav Dey",
};

function page() {
  return (
    <MdxWrapper withoutBack>
      <Certificates />
    </MdxWrapper>
  );
}

export default page;

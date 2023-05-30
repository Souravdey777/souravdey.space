import * as React from "react";
// import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import styles from "@/app/page.module.css";

const components = {
  h1: ({ ...props }) => <h1 {...props} />,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}

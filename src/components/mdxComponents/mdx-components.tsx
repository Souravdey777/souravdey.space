import * as React from "react";

// import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { clsx } from "clsx";

import { MdxCard } from "./mdx-card";

import "./mdx-components.css";
import Image from "next/image";
import MdxImg from "./mdx-img";
import YouTubeEmbed from "../YouTubeEmbed/YouTubeEmbed";
import CodePenEmbed from "../CodePenEmbed/CodePenEmbed";
import ImageGrid from "../ImageGrid/ImageGrid";

interface mxdComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const mdxComponents = {
  h1: ({ className, ...props }: mxdComponentProps) => (
    <h1 className={clsx(className, "mdx-h1")} {...props} />
  ),
  h2: ({ className, ...props }: mxdComponentProps) => (
    <h2 className={clsx(className, "mdx-h2")} {...props} />
  ),
  h3: ({ className, ...props }: mxdComponentProps) => (
    <h3 className={clsx(className, "mdx-h3")} {...props} />
  ),
  h4: ({ className, ...props }: mxdComponentProps) => (
    <h4 className={clsx(className, "mdx-h4")} {...props} />
  ),
  h5: ({ className, ...props }: mxdComponentProps) => (
    <h5 className={clsx(className, "mdx-h5")} {...props} />
  ),
  h6: ({ className, ...props }: mxdComponentProps) => (
    <h6 className={clsx(className, "mdx-h6")} {...props} />
  ),
  strong: ({ className, ...props }: mxdComponentProps) => (
    <strong className={clsx(className, "mdx-strong")} {...props} />
  ),
  p: ({ className, ...props }: mxdComponentProps) => (
    <p className={clsx(className, "mdx-para")} {...props} />
  ),
  code: ({ className, ...props }: mxdComponentProps) => (
    <code className={clsx(className, "mdx-code")} {...props} />
  ),
  a: ({ ...props }) => <a className="mdx-a" {...props} />,
  pre: ({ ...props }) => <pre className="mdx-pre" {...props} />,
  img: MdxImg,
  ul: ({ ...props }) => <ul className="mdx-list" {...props} />,
  ol: ({ ...props }) => <ul className="mdx-list" {...props} />,
  MdxCard,
  YouTubeEmbed,
  CodePenEmbed,
  ImageGrid,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={mdxComponents} />;
}

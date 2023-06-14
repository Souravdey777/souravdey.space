import React from "react";
import { allMindNuggets } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MdxWrapper } from "@/components";

import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { Mdx } from "@/components/mdxComponents/mdx-components";

import styles from "@/app/page.module.css";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getMindNuggetssFromParams(slug: string) {
  const mindNuggets = allMindNuggets.find(
    (mindNuggets) => mindNuggets._raw.flattenedPath.split("/")[1] === slug
  );

  if (!mindNuggets) {
    notFound();
  }
  return mindNuggets;
}

async function page({ params }: PageProps) {
  const mindNuggets = await getMindNuggetssFromParams(params.slug);
  // const MDXContent = useMDXComponent(mindNuggets.body.code);
  // const mdxSource = await serialize(mindNuggets, { parseFrontmatter: true });
  return (
    <main>
      <MdxWrapper>
        <h1>{mindNuggets.title}</h1>
        <Mdx code={mindNuggets.body.code} />
      </MdxWrapper>
      {/* <MdxWrapper>{mindNuggets.body.code}</MdxWrapper> */}
      {/* <MDXRemote {...mdxSource} components={mdxComponents} /> */}
      {/* <MDXContent components={mdxComponents} /> */}
    </main>
  );
}

export default page;

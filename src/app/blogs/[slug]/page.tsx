import React from "react";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MdxWrapper } from "@/components";

import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { Mdx } from "@/components/mdx-components";

import styles from "@/app/page.module.css";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getBlogsFromParams(slug: string) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === slug);

  allBlogs.map((blog) => console.log(blog._raw.flattenedPath));

  if (!blog) {
    notFound();
  }
  return blog;
}

async function page({ params }: PageProps) {
  const blog = await getBlogsFromParams(params.slug);
  // const MDXContent = useMDXComponent(blog.body.code);
  // const mdxSource = await serialize(blog, { parseFrontmatter: true });
  return (
    <main>
      <MdxWrapper>
        {/* <h1>{blog.title}</h1> */}
        <Mdx code={blog.body.code} />
      </MdxWrapper>
      {/* <MdxWrapper>{blog.body.code}</MdxWrapper> */}
      {/* <MDXRemote {...mdxSource} components={mdxComponents} /> */}
      {/* <MDXContent components={mdxComponents} /> */}
    </main>
  );
}

export default page;

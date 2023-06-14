import React from "react";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { HighLightedText, ProgressWrapper } from "@/components";

import { Mdx } from "@/components/mdxComponents/mdx-components";

import styles from "@/app/page.module.css";
import Image from "next/image";

interface PageProps {
  params: {
    slug: string;
  };
}

function getBlogsFromParams(slug: string) {
  const blog = allBlogs.find(
    (blog) => blog._raw.flattenedPath.split("/")[1] === slug
  );

  if (!blog) {
    notFound();
  }
  return blog;
}

async function page({ params }: PageProps) {
  const blog = await getBlogsFromParams(params.slug);
  return (
    <ProgressWrapper>
      <section className={styles.fullHeightContainer}>
        <h1>{blog.title}</h1>
        <h3>{blog.description}</h3>
      </section>
      {/* <section className={styles.fullHeightContainer}>
        <Image src={blog.image} alt={blog.title} fill={true} />
      </section> */}
      <article className={styles.mdxWrapperContent}>
        <Mdx code={blog.body.code} />
      </article>
    </ProgressWrapper>
  );
}

export default page;

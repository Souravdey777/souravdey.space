import React from "react";
import readingTime from "reading-time";
import dayjs from "dayjs";

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

  const {
    title,
    description,
    publishedDate,
    image,
    body: { raw, code },
  } = blog;

  const date = dayjs(publishedDate).format("DD MMM, YYYY");
  const readTime = readingTime(raw).text;
  return (
    <ProgressWrapper>
      <section className={styles.fullHeightContainer}>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <p>
          {date} / {readTime}
        </p>
        {/* {image && (
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "contain" }}
          />
        )} */}
      </section>
      <article className={styles.mdxWrapperContent}>
        <Mdx code={code} />
      </article>
    </ProgressWrapper>
  );
}

export default page;

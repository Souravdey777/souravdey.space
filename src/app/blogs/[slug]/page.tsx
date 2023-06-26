import React from "react";
import readingTime from "reading-time";
import dayjs from "dayjs";

import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Anchor, HighLightedText, ProgressWrapper } from "@/components";

import { Mdx } from "@/components/mdxComponents/mdx-components";

import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";

import { SiTwitter, SiLinkedin } from "@icons-pack/react-simple-icons";

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
  const { slug } = params;

  const {
    title,
    description,
    publishedDate,
    image,
    series,
    body: { raw, code },
  } = blog;

  const date = dayjs(publishedDate).format("DD MMM, YYYY");
  const readTime = readingTime(raw).text;
  return (
    <>
      <ProgressWrapper>
        <section className={styles.fullHeightContainer}>
          {image && (
            <Image
              src={image}
              alt={title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ margin: "0 -10%", width: "120%", height: "auto" }}
            />
          )}
          <h1>{title}</h1>
          <h3>{description}</h3>
          <p>
            {readTime} &#x2022; {date}
          </p>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "32px" }}
          >
            <p>Share the blog &#8594;</p>
            <Link
              href={`https://twitter.com/intent/tweet?text=Check out this blog on ${title} by @Souravdey777%0A%0Ahttps://souravdey.space/blogs/${slug}`}
              target="_blank"
            >
              <SiTwitter
                title="My title"
                color="var(--foreground-hex)"
                size={24}
              />
            </Link>
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://souravdey.space/blogs/${slug}`}
              target="_blank"
            >
              <SiLinkedin
                title="My title"
                color="var(--foreground-hex)"
                size={24}
              />
            </Link>
          </div>
          {series && (
            <Link
              href={`/blogs?series=${series}`}
              style={{ textTransform: "capitalize" }}
            >
              Read more blogs from the {series} Series
            </Link>
          )}
          <hr />
        </section>
        <article className={styles.mdxWrapperContent}>
          <Mdx code={code} />
        </article>
      </ProgressWrapper>
    </>
  );
}

export default page;

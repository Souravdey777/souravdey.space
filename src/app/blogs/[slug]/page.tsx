import React from "react";
import readingTime from "reading-time";
import dayjs from "dayjs";

import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { CopyLink, ProgressWrapper } from "@/components";

import { Mdx } from "@/components/mdxComponents/mdx-components";

import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";

import { SiTwitter, SiLinkedin } from "@icons-pack/react-simple-icons";
import { Linkedin, Twitter } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const blog = await getBlogsFromParams(params.slug);

  const { title, description, image } = blog;
  return {
    title: `Blog | ${title}`,
    description,
    openGraph: {
      images: image,
    },
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
        <section
          className={styles.fullHeightContainer}
          style={{ maxWidth: "840px" }}
        >
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
          <h1 style={{ textAlign: "center" }}>{title}</h1>
          <section
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <h3 style={{ textAlign: "center" }}>{description}</h3>
            <hr />
            <p>
              {readTime} &#x2022; {date}
            </p>
            <b>Share the blog</b>
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "32px" }}
            >
              <Link
                href={`https://twitter.com/intent/tweet?text=Check out this blog: ${title} by @Souravdey777%0A%0Ahttps://souravdey.space/blogs/${slug}`}
                target="_blank"
              >
                <Twitter color="var(--foreground-hex)" size={24} />
              </Link>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://souravdey.space/blogs/${slug}`}
                target="_blank"
              >
                <Linkedin color="var(--foreground-hex)" size={24} />
              </Link>
              <CopyLink link={`https://souravdey.space/blogs/${slug}`} />
            </div>
            <hr />
          </section>
          {series && (
            <Link
              href={`/blogs?series=${series}`}
              style={{ textTransform: "capitalize" }}
            >
              Read more blogs from the {series} Series &#8594;
            </Link>
          )}
        </section>
        <article
          className={styles.mdxWrapperContent}
          style={{ maxWidth: "840px" }}
        >
          <Mdx code={code} />
        </article>
      </ProgressWrapper>
    </>
  );
}

export default page;

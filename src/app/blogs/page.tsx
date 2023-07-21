import { MdxWrapper } from "@/components";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import React from "react";
import readingTime from "reading-time";
import dayjs from "dayjs";

import styles from "./blogs.module.css";

export const metadata = {
  title: "Blogs | Sourav Dey",
  description: "Sourav Dey | Digital Space",
};

async function page({
  searchParams,
}: {
  searchParams: {
    series: string;
  };
}) {
  const series = searchParams?.series || null;

  let blogs = allBlogs?.sort((a: any, b: any) =>
    dayjs(a?.publishedDate).isAfter(dayjs(b?.publishedDate)) ? -1 : 1
  );

  if (series) {
    blogs = blogs?.filter((blog) => blog.series === series);
  }

  return (
    <MdxWrapper withoutBack withoutProgress>
      <h1 className="mdx-h1">/blogs ✍🏻</h1>
      <p></p>
      {blogs.map((blog: any) => {
        const {
          _raw: { flattenedPath },
          title,
          description,
          published,
          tags,
          views,
          body: { raw },
          publishedDate,
        } = blog;
        const date = dayjs(publishedDate).format("DD MMM, YYYY");
        const readTime = readingTime(raw).text;
        if (published)
          return (
            <Link className={styles.blogCard} key={title} href={flattenedPath}>
              <p className={styles.blogCardText}>
                {readTime} &#x2022; {date}{" "}
                {views && <>&#x2022; {views} views</>}
              </p>
              <h3 className={styles.blogCardTitle}>{title}</h3>
              <p className={styles.blogCardText}>{description}</p>
            </Link>
          );
      })}
    </MdxWrapper>
  );
}

export default page;

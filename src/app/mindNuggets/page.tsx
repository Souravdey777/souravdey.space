import { MdxWrapper } from "@/components";
import { allMindNuggets } from "contentlayer/generated";
import Link from "next/link";
import React from "react";
import readingTime from "reading-time";
import dayjs from "dayjs";

async function page() {
  return (
    <MdxWrapper withoutBack withoutProgress>
      <h1 className="mdx-h1">/mindNuggets 🧠</h1>
      <p>
        The mind nugget are some interesting facts that fasinates me. This is
        have content related to a diverse topic.
      </p>
      {console.log({ allMindNuggets })}
      {allMindNuggets.map((mindNuggets: any) => {
        const {
          _raw: { flattenedPath },
          title,
          description,
          published,
          // body: { raw },
          // publishedDate,
        } = mindNuggets;
        // const date = dayjs(publishedDate).format("DD MMM, YYYY");
        // const readTime = readingTime(raw).text;
        if (published)
          return (
            <Link key={title} href={flattenedPath}>
              <p>{/* {readTime} &#x2022; {date} */}</p>
              <h3>{title}</h3>
              <p>{description}</p>
            </Link>
          );
      })}
    </MdxWrapper>
  );
}

export default page;

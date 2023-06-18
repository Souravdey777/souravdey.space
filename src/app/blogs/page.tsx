import { MdxWrapper } from "@/components";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import React from "react";
// import readingTime from "reading-time";

async function page() {
  return (
    <MdxWrapper withoutBack withoutProgress>
      <h1 className="mdx-h1">/blogs ✍🏻</h1>
      <p>
        The mind nugget are some interesting facts that fasinates me. This is
        have content related to a diverse topic.
      </p>
      {allBlogs?.map((blog: any) => {
        const {
          _raw: { flattenedPath },
          title,
          description,
          published,
          // body: { code },
        } = blog;
        console.log(blog.code);
        // const readTime = readingTime(code);
        if (published)
          return (
            <Link key={title} href={flattenedPath} style={{ margin: "16px 0" }}>
              <h1>{title}</h1>
              <p>{description}</p>
              {/* <p>{readTime}</p> */}
            </Link>
          );
      })}
    </MdxWrapper>
  );
}

export default page;

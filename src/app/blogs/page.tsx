import { MdxWrapper } from "@/components";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import React from "react";

async function page() {
  return (
    <MdxWrapper withoutBack withoutProgress>
      <h1 className="mdx-h1">/blogs ✍🏻</h1>
      <p>
        The mind nugget are some interesting facts that fasinates me. This is
        have content related to a diverse topic.
      </p>
      {allBlogs?.map((blog) => {
        const {
          _raw: { flattenedPath },
          title,
          description,
        } = blog;
        return (
          <Link key={title} href={flattenedPath} style={{ margin: "16px 0" }}>
            <h1>{title}</h1>
            <p>{description}</p>
          </Link>
        );
      })}
    </MdxWrapper>
  );
}

export default page;

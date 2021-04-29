import React from "react";
import Image from "next/image";

function Blogs({ blogs }) {
  console.log(blogs);
  return (
    <>
      <p
        style={{
          marginTop: "3rem",
          textAlign: "right",
          fontWeight: "900",
        }}
      >
        /blogs
      </p>
      <p
        style={{
          marginTop: "3rem",
          fontWeight: "900",
          fontSize: "0.75rem",
        }}
      >
        git checkout <span className="gradientText">Blogs</span>
      </p>
      <div>
        {blogs.map((blog) => (
          <a
            href={`https://souravdey777.hashnode.dev/${blog.slug}`}
            key={blog.slug}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p
              style={{
                marginTop: "3rem",
                fontSize: "1rem",
                fontWeight: "900",
              }}
            >
              {blog.title}
            </p>
            <p
              // style={{
              //   fontSize: "0.75rem",
              // }}
            >
              {blog.brief}
            </p>
          </a>
        ))}
      </div>
    </>
  );
}

export default Blogs;

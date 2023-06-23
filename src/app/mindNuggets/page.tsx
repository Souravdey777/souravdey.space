// import { MdxWrapper } from "@/components";
// import { allBlogs } from "contentlayer/generated";
// import Link from "next/link";
// import React from "react";
// import readingTime from "reading-time";
// import dayjs from "dayjs";

// import styles from "./blogs.module.css";

// async function page() {
//   return (
//     <MdxWrapper withoutBack withoutProgress>
//       <h1 className="mdx-h1">/mindNuggets 🧠</h1>
//       <p>
//         The mind nugget are some interesting facts that fasinates me. This is
//         have content related to a diverse topic.
//       </p>
//       {allBlogs
//         .sort((a: any, b: any) =>
//           dayjs(a?.publishedDate).isAfter(dayjs(b?.publishedDate)) ? -1 : 1
//         )
//         .map((blog: any) => {
//           const {
//             _raw: { flattenedPath },
//             title,
//             description,
//             published,
//             tags,
//             body: { raw },
//             publishedDate,
//           } = blog;
//           const date = dayjs(publishedDate).format("DD MMM, YYYY");
//           const readTime = readingTime(raw).text;
//           if (published)
//             return (
//               <Link
//                 className={styles.blogCard}
//                 key={title}
//                 href={flattenedPath}
//               >
//                 <p className={styles.blogCardText}>
//                   {readTime} &#x2022; {date}
//                 </p>
//                 <h3 className={styles.blogCardTitle}>{title}</h3>
//                 <p className={styles.blogCardText}>{description}</p>
//               </Link>
//             );
//         })}
//     </MdxWrapper>
//   );
// }

// export default page;

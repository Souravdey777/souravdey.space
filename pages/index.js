import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import About from "../components/about";
import { SOCIAL_LINKS } from "../utils/links";
import { Link, animateScroll as scroll } from "react-scroll";
import WorkExperience from "../components/workExperience";
import TechSkills from "../components/techSkills";
import Footer from "../components/footer";
import Blogs from "../components/latestBlogs";
import getLatestBlog from "../utils/getBlogData";

export default function Home({ blogs }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.container}>
      {/* HTML Head Tag */}
      <Head>
        <title>Sourav Dey</title>
        <link rel="icon" href="/Cursor.svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Oleo+Script+Swash+Caps"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BJ96LSKFFB"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BJ96LSKFFB');
        `,
          }}
        />
      </Head>
      <main className={styles.main}>
        <div className="LogoNav">
          <span className="gradientText">Sourav Dey</span>
          <span className="menu" onClick={() => setMenu(!menu)}>
            <Image src="/images/menu.svg" width={24} height={10} />
          </span>
        </div>
        {/* Social Media Links in desktop */}
        <div className={styles.socialIcons}>
          {SOCIAL_LINKS.map((link, id) => (
            <a
              key={id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={link.image} width={36} height={36} />
              <p className={styles.socialIconsText}>
                {link.href.replace("https://", "").replace("mailto:", "")}
              </p>
            </a>
          ))}
        </div>
        <div className={menu ? "navigation navigationClicked" : "navigation"}>
          <div>
            <Link
              onClick={() => setMenu(false)}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              /aboutMe
            </Link>
          </div>
          <div>
            <Link
              onClick={() => setMenu(false)}
              activeClass="active"
              to="workExperience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              /workExperience
            </Link>
          </div>
          <div>
            <Link
              onClick={() => setMenu(false)}
              activeClass="active"
              to="techSkills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              /techSkills
            </Link>
          </div>
          <div>
            <Link
              onClick={() => setMenu(false)}
              activeClass="active"
              to="latestBlogs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              /latestBlogs
            </Link>
          </div>
        </div>
        <div className="body">
          <div>
            <About />
            <WorkExperience />
            <TechSkills />
            {blogs && <Blogs blogs={blogs.slice(0, 4)} />}
            {/* footer */}
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  let blogs = (await getLatestBlog()).data.user.publication.posts;
  console.log(blogs);
  return { props: { blogs } };
}

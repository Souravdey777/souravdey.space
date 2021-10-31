import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import About from '../components/about'
import { SOCIAL_LINKS } from '../utils/links'
import { Link } from 'react-scroll'
import WorkExperience from '../components/workExperience'
import TechSkills from '../components/techSkills'
import Footer from '../components/footer'
import Blogs from '../components/latestBlogs'
import getLatestBlog from '../utils/getBlogData'

export default function Home({ blogs }) {
    const [menu, setMenu] = useState(false)

    return (
        <div className={styles.container}>
            {/* HTML Head Tag */}
            <Head>
                <title>Sourav Dey</title>
                <link rel="icon" href="/Cursor.svg" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oleo+Script+Swash+Caps"></link>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                    integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
                    crossOrigin="anonymous"
                />
                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-BJ96LSKFFB"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BJ96LSKFFB');
        `
                    }}
                />
            </Head>
            <main className={styles.main}>
                <div className="LogoNav">
                    <span className="gradientText">Sourav Dey</span>
                    <button
                        className="menu"
                        onClick={() => setMenu(!menu)}
                        style={{ background: 'transparent', outline: 'none', border: 'none' }}
                    >
                        <Image src="/images/menu.svg" width={24} height={10} />
                    </button>
                </div>
                {/* Social Media Links in desktop */}
                <div className={styles.socialIcons}>
                    {SOCIAL_LINKS.map((link, id) => (
                        <a key={id} href={link.href} target="_blank" rel="noopener noreferrer">
                            <Image src={link.image} width={36} height={36} />
                            <p className={styles.socialIconsText}>
                                {link.href.replace('https://', '').replace('mailto:', '')}
                            </p>
                        </a>
                    ))}
                </div>
                <div className={menu ? 'navigation navigationClicked' : 'navigation'}>
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
                        {/* <div style={{ position: "relative" }}>
              
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{
          background:"radial-gradient(31.78% 72.37% at 39.24% 0%, rgba(100, 172, 255, 0.5) 3.98%, rgba(255, 255, 255, 0) 100%), radial-gradient(38.5% 104.01% at 88.5% 77.91%, rgba(162, 250, 207, 0.5) 0%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0) 100%), radial-gradient(33.2% 77.94% at 12.6% 88.49%, rgba(100, 172, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
      width:"100%",
      position:"absolute",
      height:"20rem",
      borderRadius:"18px"}}/>
          <div className="animatedCircle" style={{width:"8rem",height:"8rem",
          marginTop: "3rem"}}></div>
        <div className="animatedCircle" style={{width:"12rem",height:"12rem",
          marginTop: "6rem"}}></div>
      </div>
              <div style={{ position: "absolute",
              borderRadius:"18px",
                    top:"0",
                    right:"0",
                    left:"0",
                    height:"20rem",
                    backgroundColor: "#8193b277",
                    backdropFilter: "saturate(180%) blur(50px)", }}>
                <p
                  className="largeText"
                  style={{
                    margin: "2rem"
                  }}
                >
                  Subscribe
                </p>
              </div>
            </div> */}
                        <Footer />
                    </div>
                </div>
            </main>
        </div>
    )
}

Home.propTypes = {
    blogs: PropTypes.string.isRequired
}

export async function getStaticProps() {
    let blogs = (await getLatestBlog()).data.user.publication.posts
    console.log(blogs)
    return { props: { blogs } }
}

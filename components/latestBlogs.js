import React from 'react'
import PropTypes from 'prop-types'

function Blogs({ blogs }) {
    console.log(blogs)
    return (
        <div id="latestBlogs">
            <p
                style={{
                    paddingTop: '3rem',
                    textAlign: 'right',
                    fontWeight: '900',
                    color: '#ffffff'
                }}
            >
                /latestBlogs
            </p>
            <p
                style={{
                    marginTop: '3rem',
                    fontWeight: '900',
                    fontSize: '0.75rem'
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
                        <div
                            style={{
                                marginTop: '3rem'
                            }}
                        >
                            <p
                                style={{
                                    fontSize: '1.75rem',
                                    fontWeight: '900',
                                    margin: '1rem 0',
                                    letterSpacing: '-1px',
                                    lineHeight: '100%'
                                }}
                            >
                                <span className="gradientText">{blog.title.substring(2)}</span>
                            </p>
                            <img
                                src={blog.coverImage}
                                style={{
                                    width: '100%',
                                    margin: '1rem 0',
                                    borderRadius: '8px'
                                }}
                                alt={blog.title}
                            />
                            <p>{blog.brief}</p>
                        </div>
                    </a>
                ))}
            </div>
            <a href="https://souravdey777.hashnode.dev" target="_blank" rel="noopener noreferrer">
                <div className="gradientText readMoreButton">Check all my blogs</div>
            </a>
        </div>
    )
}

export default Blogs

Blogs.propTypes = {
    blogs: PropTypes.string.isRequired
}

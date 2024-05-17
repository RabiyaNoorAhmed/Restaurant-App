import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom

const BlogsCard = ({ blog }) => { 
    return ( // Returning JSX
        <div>
             <div className="card w-85 bg-base-100 shadow-xl ml-2 justify-around"> {/* Main card container */}
                <Link to='/blogs'> {/* Link to the blog page */}
                    <figure> {/* Figure element for image */}
                        <img src={blog.image} alt={blog.title} className="hover:scale-105 transition-all duration-300 h-60" /> {/* Blog image */}
                    </figure>
                </Link>
                <div className="card-body p-4"> {/* Card body */}
                    <h2 className="card-title text-lg">{blog.title}</h2> {/* Blog title */}
                    <p className="text-gray-700 text-base">{blog.summary}</p> {/* Blog summary */}
                    <div className="card-actions justify-between items-center mt-2"> {/* Card actions */}
                        <h5 className="font-semibold text-textcolor"> {/* Blog metadata */}
                        <span className="inline-block bg-gray-200 rounded-full px-3  text-sm font-semibold text-gray-700 mr-2">{blog.category}</span> {/* Blog category */}
                        <span className="inline-block bg-gray-200 rounded-full px-3  text-sm font-semibold text-gray-700 mr-2">{blog.date}</span> {/* Blog date */}
                        <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2">{blog.author.name}</span> {/* Author name */}
                        <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2">{blog.author.role}</span> {/* Author role */}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BlogsCard; // Exporting the BlogsCard component


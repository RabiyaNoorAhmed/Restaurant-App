import React from 'react'
import SectionBanner from '../../components/banner/SectionBanner'
import BlogList from '../../components/blogs/BlogsList'

const Blogs = () => {
  return (
    <div>
      <SectionBanner
                title="Welcome to Our "
                subtitle=" Blog"
                text="Explore our collection of insightful articles, delicious recipes, and expert tips on all things food and nutrition."
                buttonText="Learn More"
            />
            <BlogList/>
    </div>
  )
}

export default Blogs

import React from 'react'
import SectionBanner from '../../components/banner/SectionBanner'
import Grid from '../../components/gallery/Grid'

const Gallery = () => {
  return (
    <div>
     <SectionBanner
                title="Explore Culinary Artistry  "
                subtitle="Our Gallery Page Awaits"
                text="Experience culinary bliss in our gallery page. Each image a masterpiece,
                 each dish a revelation. Dive in and savor the flavors of our Tasty Retreat."
                buttonText="Enter Gallery"
            />
            <Grid/>
    </div>
  )
}

export default Gallery

import React from 'react'
import SectionBanner from '../../components/banner/SectionBanner'
import AboutUsCom from '../../components/about/AboutUsCom'
const About = () => {
    return (
        <div>
            <SectionBanner
                title="Discover the Taste of  "
                subtitle="Perfection"
                text="At Tasty Retreat, we blend culinary artistry with a passion for fresh, 
                local ingredients to bring you an unforgettable dining experience. Join us on a journey 
                of flavor, where every dish is crafted with care and every meal is a celebration."
                buttonText="Learn More"
            />
            <AboutUsCom />
        </div>
    )
}

export default About

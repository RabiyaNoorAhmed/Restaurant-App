import React from 'react'
import S1 from '../../assets/images/s1.jpg'
import S2 from '../../assets/images/s2.jpg'
import G1 from '../../assets/images/g1.jpg'
import G2 from '../../assets/images/g2.jpg'
import AboutData from './AboutData'

const AboutUsCom = () => {
    return (
        <div className='my-16 mx-24'>
            <div className='text-center'>
                <h2 className="text-textcolor font-primary md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                    Discover the Story Behind Tasty Retreat</h2>
            </div>
            <AboutData
                className="first-desc"
                heading="Our Story:From Passion to Plate"
                text=" At Tasty Retreat, our journey began with a simple passion for good food.
                 What started as a humble kitchen experiment quickly evolved into a culinary adventure. 
                 From experimenting with flavors to perfecting recipes, we've poured our hearts into every
                  dish we create."
                img1={S1}
                img2={S2}

            />
            <AboutData
                className="first-des-reverse"
                heading="Our Mission:Culinary Excellence, Every Time"
                text="Our mission at Tasty Retreat is clear: to deliver culinary excellence with every bite.
                 We strive to source the freshest ingredients, infuse creativity into our cooking,
                  and provide an exceptional dining experience for every guest. Whether it's a casual meal
                   or a special occasion, we're dedicated to exceeding your expectations
                    and leaving a lasting impression."
                img1={G1}
                img2={G2}

            />
        </div>
    )
}

export default AboutUsCom

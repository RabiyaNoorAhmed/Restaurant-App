import React from 'react'
import Banner from '../../components/banner/Banner'
import PopularDishes from '../../components/populardishes/PopularDishes'
import MenuCom from '../../components/menu/MenuCom'
import Testimonials from '../../components/testimonial/Testimonials'
import FooterBanner from '../../components/banner/FooterBanner'

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularDishes />
      <MenuCom />
      <Testimonials />
      <FooterBanner />
    </div>
  )
}

export default Home

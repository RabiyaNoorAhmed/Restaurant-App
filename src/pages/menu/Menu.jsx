import React from 'react'
import MenuCom from '../../components/menu/MenuCom'
import SectionBanner from '../../components/banner/SectionBanner'

const Menu = () => {
  return (
    <div>
      <SectionBanner 
        title="For the Love of Delicious "
        subtitle="Food"
        text="Enjoy classic fast food favorites such as Crispy Fried Chicken, Double Cheeseburgers,
             Fish and Chips, BLT Sandwiches, and Garlic Parmesan Fries. Classic flavors that never disappoint!"
             buttonText="Order Now"
      />
      <MenuCom />
    </div>
  )
}

export default Menu

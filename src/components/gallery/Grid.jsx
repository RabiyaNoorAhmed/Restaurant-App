import React from 'react'
import Grid1 from '../../assets/images/grid1.jpg'
import Grid2 from '../../assets/images/grid2.jpg'
import Grid3 from '../../assets/images/grid3.jpg'
import Grid4 from '../../assets/images/grid4.jpg'
import Grid5 from '../../assets/images/grid5.jpg'
import Grid6 from '../../assets/images/grid6.jpg'
import Grid7 from '../../assets/images/grid7.jpg'
import Grid8 from '../../assets/images/grid8.jpg'
import Grid9 from '../../assets/images/grid9.jpg'
import Grid10 from '../../assets/images/grid10.jpg'
import Grid11 from '../../assets/images/grid11.jpg'
import Grid12 from '../../assets/images/grid12.jpg'
import Grid13 from '../../assets/images/grid13.jpg'
import Grid14 from '../../assets/images/grid14.jpg'
import Grid15 from '../../assets/images/grid15.jpg'

const Grid = () => {
  return (
    
    <div className='p-5 md:p-20'>
          <div className='text-center mb-9'>
                <h2 className="text-textcolor font-primary md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                Discover Our Gallery <span className='text-Green'>Where Every Image Tells a Story</span></h2>
            </div>
    <div className='columns-1 gap-5 lg:gap-3 sm:columns-2 lg:columns-3 xl:columns-4
     [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8'>
        <img src={Grid1} className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid2}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid3}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid4}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid5}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid6}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid7}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid8}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid9}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid10}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid11}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid12}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid13}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid14}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid15}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid12}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid13}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid14}  className='hover:scale-105 transition-all duration-300'/>
        <img src={Grid15}  className='hover:scale-105 transition-all duration-300'/>
    </div>
    </div>
  )
}

export default Grid



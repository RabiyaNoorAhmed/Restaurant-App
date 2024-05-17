import React from 'react';
import bannerImg from '../../assets/images/banner.png';
import { FaSearch } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FAF7FA] to-100%'>
            <div className="py-24 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2  px-4 space-y-7">
                    {/* Heading */}
                    <h2 className="text-textcolor font-primary md:text-5xl text-4xl font-bold md:leading-snug leading-snug">One Place to <br /> <span className="text-Red">Stop, Every Food</span><br />You Need !</h2>
                    {/* Description */}
                    <p className="text-[#4A4A4A] text-sm">
                        Welcome to Tasty Retreat, where culinary excellence meets serene surroundings.
                        Indulge in a gastronomic journey like no other, where each dish is crafted with
                        passion and precision to delight your senses.
                    </p>
                    {/* Explore Food button */}
                    <button className='btn bg-Green rounded-full text-white font-semibold px-8 py-3 hover:bg-white hover:text-Green '>Explore Food</button>
                    {/* Search button */}
                    <button className='btn rounded-full px-8 py-3 bg-white  hover:bg-white hover:text-Green ml-2'><FaSearch />Search</button>
                </div>
                <div className="md:w-1/2">
                    {/* Banner image */}
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Banner;

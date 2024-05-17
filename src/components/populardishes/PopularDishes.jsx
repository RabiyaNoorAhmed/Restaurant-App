import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../card/Card';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Arrow component for next slide
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        >
            NEXT
        </div>
    );
};

// Arrow component for previous slide
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        >
            BACK
        </div>
    );
};

const PopularDishes = () => {
    const [dishes, setDishes] = useState([]);
    const slider = React.useRef(null);

    useEffect(() => {
        // Fetch data from menuData.json
        fetch("/menuData.json")
            .then((res) => res.json())
            .then((data) => {
                // Filter popular dishes
                const popularDishes = data.filter((item) => item.category === "Popular");
                console.log(popularDishes);
                setDishes(popularDishes);
            });
    }, []);

    // Settings for the Slider component
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SampleNextArrow />, // Custom next arrow component
        prevArrow: <SamplePrevArrow />, // Custom previous arrow component
    };

    return (
        <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20 relative'>
            <div className=" text-left">
                <h2 className='title'>Popular Dishes</h2>
            </div>
            <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
                <button onClick={() => slider?.current?.slickPrev()} className=" btn p-2 rounded-full ml-5  bg-white hover:bg-Green">
                    <FaArrowLeft className=" h-8 w-8 p-1 border-Green text-Green hover:text-white" />
                </button>
                <button onClick={() => slider?.current?.slickNext()} className="bg-green btn p-2 rounded-full ml-5 bg-Green hover:bg-white">
                    <FaArrowRight className=" h-8 w-8 p-1 border-Green text-white hover:text-Green" />
                </button>
            </div>
            {/* Slider component */}
            <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5">
                {/* Map through dishes and render Card component for each */}
                {dishes.map((item, i) => (
                    <Card item={item} key={i} />
                ))}
            </Slider>
        </div>
    );
}

export default PopularDishes;


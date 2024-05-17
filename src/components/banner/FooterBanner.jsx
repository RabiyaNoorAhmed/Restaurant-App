import React from 'react';
import bannerImg from '../../assets/images/footerbanner.jpg'
const FooterBanner = () => {
    return (
        <div>
            {/* menu banner */}
            <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4" style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="h-[500px] py-48 flex flex-col items-center justify-center">
                    {/* content */}
                    <div className=" text-center px-4 space-y-4">
                        <h2 className="text-white mt-12 md:text-5xl text-3xl font-bold md:leading-snug leading-snug">
                            Book A Table For Dinner
                        </h2>
                        <p className="text-white px-10 text-md md:w-4/5 mx-auto">
                            Enjoy classic fast food favorites such as Crispy Fried Chicken, Double Cheeseburgers,
                            Fish and Chips, BLT Sandwiches, and Garlic Parmesan Fries. Classic flavors that never disappoint!
                        </p>
                        <button className="bg-Green font-semibold btn text-white px-8 py-3 rounded-full hover:text-Green hover:bg-white">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBanner;

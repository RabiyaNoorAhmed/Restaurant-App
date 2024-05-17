import React, { useContext } from 'react'; 
import { Link } from 'react-router-dom'; 
import { GoStarFill } from 'react-icons/go'; 
import { CartContext } from '../../context/CartContext'; 
const Card = ({ item }) => { 
    const { addToCart } = useContext(CartContext); // Destructuring addToCart function from CartContext

    return ( 
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <Link to={`/menu/${item._id}`}> {/* Link to the menu item page */}
                    <figure> {/* Figure element for image */}
                        <img src={item.image} alt="dishes" className="hover:scale-105 transition-all duration-300 h-60" /> {/* Menu item image */}
                    </figure>
                </Link>
                <div className="card-body p-4"> {/* Card body */}
                    <h2 className="card-title text-lg">{item.name}</h2> {/* Menu item name */}
                    <div className='flex justify-start'> {/* Star ratings */}
                        <GoStarFill className='text-orange-400' /> 
                        <GoStarFill className='text-orange-400' /> 
                        <GoStarFill className='text-orange-400' /> 
                        <GoStarFill className='text-orange-400' /> 
                        <GoStarFill className='text-orange-400' /> 
                    </div>
                    <div className="card-actions justify-between items-center mt-2"> {/* Card actions */}
                        <h5 className="font-semibold text-textcolor">
                            <span className="text-sm text-Red">$</span> {item.price} {/* Menu item price */}
                        </h5>
                        <button className="btn bg-Green text-white rounded-full hover:bg-white hover:text-Green" onClick={() => addToCart(item)}>Add to Cart</button> {/* Add to cart button */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card; // Exporting the Card component



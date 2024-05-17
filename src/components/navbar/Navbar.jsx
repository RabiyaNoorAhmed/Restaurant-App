import React, { useEffect, useState ,useContext } from 'react'
import logo from '../../assets/images/logo.png'
import { GiDiscGolfBag } from "react-icons/gi";
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from '../../context/CartContext'; // Adjust the path as necessary

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const { cartItems } = useContext(CartContext);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const location = useLocation(); // Get the current location

    // Handle Scroll function
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    // Conditionally render the Cart link based on the current location
    const renderCartLink = () => {
        if (location.pathname !== '/cart-page') {
            return (
                <Link to="/cart-page">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle lg:flex items-center justify-center mr-3"
                    >
                        <div className="indicator">
                            <GiDiscGolfBag className="h-5 w-5 text-Green" />
                            <span className="badge badge-sm indicator-item">{totalItems}</span>
                        </div>
                    </label>
                </Link>
            );
        }
        return null;
    };

    return (
        <header className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}>
            <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out" : ""}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/" className='text-textcolor font-semibold hover:bg-transparent hover:text-orange-500'>Home</Link></li>
                            <li><Link to="/blogs" className='text-textcolor font-semibold hover:bg-transparent hover:text-orange-500'>Blogs</Link></li>
                            <li><Link to="/gallery" className='text-textcolor font-semibold hover:bg-transparent hover:text-orange-500'>Gallery</Link></li>
                            <li><Link to="/menu" className='text-textcolor font-semibold hover:bg-transparent hover:text-orange-500'>Menu</Link></li>
                            <li><Link to="/about" className='text-textcolor font-semibold hover:bg-transparent hover:text-orange-500'>About</Link></li>
                        </ul>
                    </div>
                    <Link to='/'>
                        <img src={logo} className='w-[110px]' alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/" className='text-textcolor font-semibold hover:bg-transparent hover:text-orange-500'>Home</Link></li>
                        <li><Link to="/blogs" className='text-textcolor font-semibold hover:bg-transparent hover:text-orange-500'>Blogs</Link></li>
                        <li><Link to="/gallery" className='text-textcolor font-semibold hover:bg-transparent hover:text-orange-500'>Gallery</Link></li>
                        <li><Link to="/menu" className='text-textcolor font-semibold hover:bg-transparent hover:text-orange-500'>Menu</Link></li>
                        <li><Link to="/about" className='text-textcolor font-semibold hover:bg-transparent hover:text-orange-500'>About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {renderCartLink()} {/* Render Cart link */}
                    <button>
                        {isAuthenticated && (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost flex items-center gap-2">
                                    <img src={user.picture} className="w-8 h-8 rounded-full" alt="User Avatar" />
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <span className="justify-between">{user.name}</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </button>
                    {isAuthenticated ? (
                        <button onClick={() => logout({ returnTo: window.location.origin })}
                            className="btn bg-Red rounded-full text-white flex items-center gap-2 ml-2 px-8 hover:bg-white hover:text-Red">
                            Log Out
                        </button>
                    ) : (
                        <button
                            onClick={() => loginWithRedirect()}
                            className="btn bg-Red rounded-full text-white flex items-center gap-2 ml-2 px-8 hover:bg-white hover:text-Red"
                        >
                            LogIn
                        </button>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Navbar;

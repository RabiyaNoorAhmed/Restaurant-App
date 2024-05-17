import React from "react";
import Logo from '../../assets/images/logo.png'
import { FaLinkedin ,FaFacebook ,FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer xl:px-24 py-10 px-4 text-base-content">
        <aside>
          <img src={Logo} alt="" className='w-[110px]'/>
          <p className="my-3 md:w-40 text-textcolor">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </aside>
        <nav>
          <header className="text-textcolor text-semibold text-xl">Useful links</header>
          <a className="links">About us</a>
          <a className="links">Events</a>
          <a className="links">Blogs</a>
          <a className="links">FAQ</a>
        </nav>
        <nav>
          <header className="text-textcolor text-semibold text-xl">Main Menu</header>
          <a className="links">Home</a>
          <a className="links">Offers</a>
          <a className="links">Menus</a>
          <a className="links">Reservation</a>
        </nav>
        <nav>
          <header className="text-textcolor text-semibold text-xl">Contact Us</header>
          <a className="links ">example@email.com</a>
          <a className="links">+64 958 248 966</a>
          <a className="links">Social media</a>
        </nav>
      </footer>
        <hr />
      <footer className="footer items-center xl:px-24 px-4 py-4 mt-2">
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-start">
          <a>
          <FaLinkedin className="w-8 h-8 text-Green cursor-pointer hover:text-orange-500" />

          </a>
          <a>
          <FaFacebook className="w-8 h-8 text-Green cursor-pointer hover:text-orange-500" />
          </a>
          <a>
          <FaInstagram className="w-8 h-8 text-Green cursor-pointer hover:text-orange-500"/>
          </a>
          <a>
          <FaTwitter className="w-8 h-8 text-Green cursor-pointer hover:text-orange-500"/>
          </a>
        </nav>
        <aside className="items-center grid-flow-col ">
          <p className="text-textcolor text-xl" >Copyright © 2024 - All right reserved</p>
        </aside>
        
      </footer>
    </div>
  );
};

export default Footer;
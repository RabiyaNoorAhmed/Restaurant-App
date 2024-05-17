import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import '../App.css';
import Footer from '../components/footer/Footer';

// Main component rendering Navbar, Outlet (for nested routes), and Footer
const Main = () => {
  return (
    <div>
      <Navbar /> {/* Render Navbar component */}
      <div className='min-h-screen'>
        <Outlet /> {/* Render nested routes */}
      </div>
      <Footer /> {/* Render Footer component */}
    </div>
  );
};

export default Main;


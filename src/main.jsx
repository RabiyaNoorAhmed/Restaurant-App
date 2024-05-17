// import ReactDOM from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import router from './routes/Router.jsx'
// import { Auth0Provider } from '@auth0/auth0-react';
// ReactDOM.createRoot(document.getElementById('root')).render(
 
//   <Auth0Provider
//     domain="dev-4m5bbmxi4525a1hd.us.auth0.com"
//     clientId="fYdc8cUyt3uhySY63bPVBSBvphT3Qr0z"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <RouterProvider router={router} />
//   </Auth0Provider>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router.jsx';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { CartProvider, CartContext } from './context/CartContext.jsx'; // Adjust the path as necessary

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
     domain="dev-4m5bbmxi4525a1hd.us.auth0.com"
    clientId="fYdc8cUyt3uhySY63bPVBSBvphT3Qr0z"
   authorizationParams={{
       redirect_uri: window.location.origin
     }}
  >
    <CartProvider>

      <RouterProvider router={router} />
    </CartProvider>
  </Auth0Provider>
);


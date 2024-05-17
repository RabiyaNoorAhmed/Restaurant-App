import React, { createContext, useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Create a new context for the cart data
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { user, isAuthenticated } = useAuth0(); // Get user authentication status from Auth0
    const [cartItems, setCartItems] = useState([]); // State to manage cart items

    // Load cart items from localStorage on initialization
    useEffect(() => {
        if (isAuthenticated) {
            const storedCartItems = JSON.parse(localStorage.getItem(`cartItems_${user.sub}`)); // Get cart items from localStorage based on user ID
            if (storedCartItems) {
                setCartItems(storedCartItems); // Set cart items from localStorage
            }
        } else {
            setCartItems([]); // If not authenticated, clear cart items
        }
    }, [user, isAuthenticated]);

    // Save cart items to localStorage whenever they change
    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem(`cartItems_${user.sub}`, JSON.stringify(cartItems)); // Save cart items to localStorage based on user ID
        }
    }, [cartItems, user, isAuthenticated]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem._id === item._id); // Check if item already exists in cart
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem._id === item._id
                        ? { ...cartItem, quantity: cartItem.quantity + 1, totalPrice: (cartItem.quantity + 1) * cartItem.price }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1, totalPrice: item.price }]; // If item does not exist, add it to cart
            }
        });
    };

    // Function to increment quantity of an item in the cart
    const incrementQuantity = (itemId) => {
        setCartItems(prevItems => prevItems.map(cartItem =>
            cartItem._id === itemId
                ? { ...cartItem, quantity: cartItem.quantity + 1, totalPrice: (cartItem.quantity + 1) * cartItem.price }
                : cartItem
        ));
    };

    // Function to decrement quantity of an item in the cart
    const decrementQuantity = (itemId) => {
        setCartItems(prevItems => prevItems.map(cartItem =>
            cartItem._id === itemId && cartItem.quantity > 1
                ? { ...cartItem, quantity: cartItem.quantity - 1, totalPrice: (cartItem.quantity - 1) * cartItem.price }
                : cartItem
        ));
    };

    // Function to delete an item from the cart
    const deleteItem = (itemId) => {
        setCartItems(prevItems => prevItems.filter(cartItem => cartItem._id !== itemId)); // Filter out the item to be deleted
    };

    // Function to clear all items from the cart
    const clearCart = () => {
        setCartItems([]); // Clear the cart items array
    };

    // Function to calculate total amount of items in the cart
    const getTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.totalPrice, 0).toFixed(2); // Calculate total amount based on totalPrice of each item
    };

    // Provide cart data to the components within the CartContext.Provider
    return (
        <CartContext.Provider value={{ cartItems, addToCart, incrementQuantity, decrementQuantity, deleteItem, clearCart, getTotalAmount }}>
            {children} {/* Render the children components */}
        </CartContext.Provider>
    );
};

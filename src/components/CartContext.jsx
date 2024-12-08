import React, { createContext, useState, useContext, useCallback } from 'react';

// Create the CartContext
const CartContext = createContext();

// CartProvider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [showCart, setShowCart] = useState(false);

  // Add to cart handler
  const addToCart = useCallback((item) => {
    setCartItems(prevItems => {
      const currentQuantity = prevItems[item.id]?.quantity || 0;
      return {
        ...prevItems,
        [item.id]: {
          ...item,
          quantity: currentQuantity + 1
        }
      };
    });
  }, []);

  // Remove from cart handler
  const removeFromCart = useCallback((item) => {
    setCartItems(prevItems => {
      const currentQuantity = prevItems[item.id]?.quantity || 0;
      
      if (currentQuantity <= 1) {
        // Remove the item completely if quantity is 1
        const { [item.id]: removedItem, ...remainingItems } = prevItems;
        return remainingItems;
      }
      
      return {
        ...prevItems,
        [item.id]: {
          ...item,
          quantity: currentQuantity - 1
        }
      };
    });
  }, []);

  // Calculate total cart items
  const totalCartItems = Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);

  // Calculate total cart price
  const totalCartPrice = Object.values(cartItems).reduce((total, item) => total + (item.price * item.quantity), 0);

  // Open cart
  const openCart = useCallback(() => {
    setShowCart(true);
  }, []);

  // Close cart
  const closeCart = useCallback(() => {
    setShowCart(false);
  }, []);

  // Clear cart
  const clearCart = useCallback(() => {
    setCartItems({});
  }, []);

  // Provide context value
  const contextValue = {
    cartItems,
    showCart,
    totalCartItems,
    totalCartPrice,
    addToCart,
    removeFromCart,
    openCart,
    closeCart,
    clearCart
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
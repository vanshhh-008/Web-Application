import React, { createContext, useState, useEffect } from 'react';

import toast, { Toaster } from "react-hot-toast";
export const CartContext = createContext();

export const CartProvider = ({ children}) => {

  const [cart, setCart] = useState(() => {
  
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

 
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
};
const initialQuantities = cart.reduce((acc, item) => {
  acc[item.id] = item.quantity||1; 
  return acc;
}, {});

const [quantities, setQuantities] = useState(initialQuantities);
const handleQuantityChange = (id, delta) => {
  setQuantities((prev) => {
    const newQuantity = Math.max(1, (prev[id] || 1) + delta); 
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    return { ...prev, [id]: newQuantity };
  });
};
const [formData, setFormData] = useState({
  name: "",
  email: "",
  tableNumber: "",
  phoneNumber: "",
  comments: "",
  quantity:"",
  productName:"",
  totalAmount:""

});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};


  const handleClear = () => {
        setFormData({
          name: "",
          email: "",
          tableNumber: "",
          phoneNumber: "",
          comments: "",
        });
      };

  const handleConfirm = async () => {
    

        if (!formData.tableNumber || formData.tableNumber < 1) {
          toast.error("Table Number must be at least 1.");
          return;
        }
        if (!/^\d{10}$/.test(formData.phoneNumber)) {
          toast.error("Phone Number must be exactly 10 digits.");
          return;
        }


        const orderData = {
          ...formData,
          cartItems: cart.map((item) => ({
            productName: item.title,
            quantity: quantities[item.id] || item.quantity || 1,
          })),
          totalAmount: cart.reduce((total, item) => {
            const quantity = quantities[item.id] || item.quantity || 1;
            return total + item.price2 * quantity;
          }, 0),
        };

        

        
        try {
          const response = await fetch("https://web-application-api.vercel.app/confirm", {
            method: "POST",
            body: JSON.stringify(orderData),
            headers: {
              "Content-Type": "application/json",
            },
          });
         
          const result = await response.json(); 
          localStorage.setItem("orders", JSON.stringify(result));
          toast.success("Order Placed Successfully");
       
        handleClear();
        
        } catch (error) {
          toast.error("Failed to place the order. Please try again.");
          console.error(error);
        }
      };

  return (
  
    <CartContext.Provider value={{ cart, setCart, clearCart,formData,setFormData,handleChange,handleClear,handleConfirm,quantities,
      handleQuantityChange}}>
        
          <Toaster></Toaster>
      {children}
      
    </CartContext.Provider>
  
  );
};


import React, { useState } from "react";
import "./order.css";
import './nav_style.css';
import './FixNavAndFoot.css';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "./navbar";
import Footer from "./footer";

const OrderConfirm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [orderType, setOrderType] = useState('');
  const [comments, setComments] = useState('');
  const [quantity, setQuantity] = useState(1); // Default quantity

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta)); // Ensure quantity stays >= 1
  };

  const collectData = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:9000/", {
        method: "POST",
        body: JSON.stringify({ name, email, tableNumber, PhoneNumber, orderType, comments, quantity }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to place order.");
      let result = await response.json();
      localStorage.setItem("orders", JSON.stringify(result));
      toast.success("Order Placed Successfully");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <title>{props.titleOrder}</title>
      <header className="navbar">
        <Navbar />
      </header>
     
      <div className="app">
        <header className="header">
          <h1>Confirm Details</h1>
          <p>Fill out the form below to proceed.</p>
        </header>
        <main className="form-container">
          <form onSubmit={collectData} className="form">
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Table Number */}
            <div className="form-group">
              <label htmlFor="tableNumber">Table Number</label>
              <input
                type="number"
                id="tableNumber"
                name="tableNumber"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                placeholder="Enter your table number"
                required
              />
            </div>
            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={PhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>
            {/* Order Type */}
            <div className="form-group">
              <label htmlFor="orderType">Order Type</label>
              <select
                id="orderType"
                name="orderType"
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                required
              >
                <option value="">Select an option</option>
                <option value="dine-in">Dine-In</option>
                <option value="takeaway">Takeaway</option>
                <option value="delivery">Delivery</option>
              </select>
            </div>
            {/* Quantity Selector */}
            <div className="form-group quantity-selector">
              <label>Quantity</label>
              <div className="quantity-controls">
                <button
                  type="button"
                  onClick={() => handleQuantityChange(-1)}
                  className="quantity-btn"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="quantity-display"
                />
                <button
                  type="button"
                  onClick={() => handleQuantityChange(1)}
                  className="quantity-btn"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
            {/* Comments */}
            <div className="form-group">
              <label htmlFor="comments">Additional Comments</label>
              <textarea
                id="comments"
                name="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Enter any additional information"
              />
            </div>
            {/* Buttons */}
            <div className="form-buttons">
              <button type="submit" className="submit-btn">
                Place Order
              </button>
              <button
                type="button"
                className="clear-btn"
                onClick={() => {
                  setName('');
                  setEmail('');
                  setTableNumber('');
                  setPhoneNumber('');
                  setOrderType('');
                  setComments('');
                  setQuantity(1); // Reset quantity
                }}
              >
                Clear
              </button>
            </div>
          </form>
        </main>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default OrderConfirm;

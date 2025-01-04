import React, { useContext, useEffect, useState } from "react";
import Navbar from "./navbar";
import "../src/order.css";
import { CartContext } from "../src/CartContext";
import toast, { Toaster } from "react-hot-toast";
import { FaTableCellsRowLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Footer from "./footer";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
export default function ConfirmOrder({ size }) {
  const { cart,formData,setFormData,handleChange,handleClear,handleConfirm} = useContext(CartContext);
  const navigate = useNavigate();
 const navigation =  ()=>{
  if(!formData.name||!formData.email||!formData.tableNumber||!formData.phoneNumber){
    return;
  }
  navigate("/final");
 }

  return (
    <>
      <header className="navbar">
        <Navbar size={cart.length} />
        <p>{size}</p>
      </header>

      <Toaster toastOptions={{ duration: 5000 }} />
      <div className="app">
        <header className="header">
          <h1>Confirm Details</h1>
          <p>Fill out the form below to proceed.</p>
        </header>
        <main className="form-container" style={{marginBottom:'50px'}}>
          <form className="form">
            {/* Name */}
            
            <div className="form-group">
           <label htmlFor="name">Name</label>
           <div className="input-icon-wrapper">
    
      
    
      </div>
      <div className="d-flex justify-content-between">
      <FaUser style={{marginTop:'3.5%',fontSize:'22px'}}/>
      <input 
              style={{margin:'0% 4%'}}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            required/>
           
      </div>

             
            </div>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="d-flex justify-content-between">
              <MdEmail  style={{marginTop:'3.5%',fontSize:'22px'}}/>
              <input
               style={{margin:'0% 4%'}}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              required/>
              </div>
            </div>
            {/* Table Number */}
            <div className="form-group">
              <label htmlFor="tableNumber">Table Number</label>
              <div className="d-flex justify-content-between">
              <FaTableCellsRowLock  style={{marginTop:'3.5%',fontSize:'22px'}}/>
              <input
              style={{margin:'0% 4%'}}
                type="integer"
                id="tableNumber"
                name="tableNumber"
                value={formData.tableNumber}
                onChange={handleChange}
                placeholder="Enter your Table Number"
                min="1"
              required/>
              </div>
            </div>
            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <div className="d-flex justify-content-between">
              <FaPhoneAlt style={{marginTop:'3.5%',fontSize:'22px'}}/>
              <input
                style={{margin:'0% 4%'}}
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your Phone Number"
               pattern="^\d{10}$"
              required/>
              </div>
            </div>
            {/* Comments */}
            <div className="form-group">
              <label htmlFor="comments">Comments</label>
              <div className="d-flex justify-content-between">
              <FaComments style={{marginTop:'3.5%',fontSize:'22px'}}/>
              <textarea
                style={{margin:'0% 4%'}}
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Enter comments"
              required/>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex flex-column">
            <button
            onClick={navigation}
                type="submit"
                className="btn btn-success mb-2"
                style={{ padding: "10px 0px" ,fontFamily:'Audiowide',width:'100%'}}
              >
                Confirm Order
            </button>
              <button
                type="button"
                className="btn btn-secondary mb-3"
                style={{ padding: "10px 0px" ,fontFamily:'Audiowide'}}
                onClick={handleClear}
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
}

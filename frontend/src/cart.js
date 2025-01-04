import React, { useContext, useState } from 'react';
import { CartContext } from '../src/CartContext';
import Navbar from './navbar';
import Footer from './footer';
import "../src/cart.css";
import { PiChefHatBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FaTrashRestore } from "react-icons/fa";

export default function Cart({size}) {
  
  const { cart, setCart ,formData,setFormData,handleChange,handleClear,handleConfirm} = useContext(CartContext);
  

  const { quantities, handleQuantityChange } = useContext(CartContext);



  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <>
      <header className="navbar">
        <Navbar size={cart.length}/>
        <p>{size}</p>
      </header>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide" />
      <h2 style={{ fontFamily: 'Audiowide', textAlign: 'center' }}>Cart Items</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No items in the cart.</p>
      ) : (
        <div className='container'>
          <div className="row">
            {cart.map((item) => (
              <div
                className="col-md-3"
                key={item.id}
                style={{
                  marginTop: "20px",
                  width: '100%',
                  height: '10%',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  borderRadius: '10px',
                  margin: '5px',
                  boxSizing: 'border-box',
                  backgroundColor: '#fff',
                  display: 'flex',
                  marginBottom: '10px'
                }}
              >
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <div className='d-flex justify-content-between'>
                  <img
                    src={item.image}
                    style={{
                      width: '120px',
                      maxWidth: '200px',
                      height: '120px',
                      borderRadius: '10px',
                      marginTop: '15%'
                    }}
                    alt={item.title}
                  />
                  <div className="card-body">
                 
                    <h5 className="card-title" style={{ margin: '5% 5%' }}>{item.title}</h5>
                   
          
                    <p className="card-text" style={{ margin: '0% 5%' }}>{item.text}</p>
                    <div className='d-flex justify-content-coulumn'>
                    <div className="rating" style={{ margin: '0% 5%' }}>
                      <span className={item.rating1}></span>
                      <span className={item.rating2}></span>
                      <span className={item.rating3}></span>
                      <span className={item.rating4}></span>
                      <span className={item.rating5}></span>
                    </div>
                    <button
                        style={{fontSize:'20px' ,borderRadius:'15px',backgroundColor:'transparent'}}
                    
                        onClick={() => handleRemove(item.id)}
                      >
                        <FaTrashRestore style={{color:'red'}}/>
                      </button>
                   </div>
                     
                    <div className="price" style={{ margin: '0% 5%', marginTop: "20px", marginRight: "65px", fontSize: "12px" }}>
                      <i className="fa fa-inr" aria-hidden="true">
                        <s>{item.price}</s>
                      </i>
                    </div>

                    <div className="price2" style={{ margin: '0% 20%', marginTop: "-20px", marginRight: "1px" }}>
                      <i className="fa fa-inr" aria-hidden="true">
                        {item.price2}
                      </i>
                    </div>

                    <div className="form-group quantity-selector" style={{ display: 'flex', margin: '0% 2%' ,marginBottom:'20px'}}>
                      <label>Quantity</label>
                      <div className="quantity-controls">
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="quantity-btn"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={quantities[item.id]||1}
                          onChange={handleChange}
                          readOnly
                          className="quantity-display"
                        />
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="quantity-btn"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

               
                      
               
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className='btn_further d-flex justify-content-around mb-2 mt-3'>
       <Link to="/coffeeDrinks"> <button type="button" className="btnB" style={{border:'1px solid #ccc', backgroundColor:'transparent',fontFamily:'Audiowide',borderRadius:'20px',marginBottom:'50px'}}>&#8617; BACK</button></Link>
       <Link to="/confirm"><button type="button" className="btnO"  style={{border:'1px solid #ff4500', backgroundColor:'#ff4500',color:'white',fontFamily:'Audiowide',borderRadius:'20px',marginBottom:'50px'}}> <PiChefHatBold style={{fontSize:'22px'}}/> PLACE ORDER</button></Link>
      </div>
        </div>
      )}


    
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

import React, { useContext } from 'react'
import Footer from './footer'
import Navbar from './navbar'
import { CartContext } from '../src/CartContext';
import visa from "../src/Visa.png";
import master from "../src/mastercard.png";
import google from "../src/googlepay.jpg";
import phone from "../src/phonepay.svg";
import QR from "../src/paymentQR.jpeg";
import { Link, useNavigate } from 'react-router-dom';
export default function Payment({size}) {
    const { cart,handleConfirm } = useContext(CartContext); 
    const navigate = useNavigate();

  
  const handleButtonClick = () => {
    handleConfirm(); 
    navigate("/timing"); 
  };
 
  return (
    <>
 <header className="navbar">
        <Navbar size={cart.length} />
      </header>
      <div className="app">
             <header className="header">
               <h1>Choose a Payment Mode</h1>
            <p>Make a Payment to proceed further</p>
             </header>
             <main className="form-container" style={{marginBottom:'50px'}}>
               <form className="form">
                <div className='d-flex justify-content-between'>
               <img src={visa} style={{width:'50px',height:'40px'}}></img>
               <img src={master} style={{width:'50px',height:'50px'}}></img>
               <img src={google} style={{width:'80px',height:'80px'}}></img>
               <img src={phone} style={{width:'80px',height:'80px'}}></img>
            
               </div>
               <hr></hr>
               <img src={QR} style={{width:'100%',height:'80%'}}></img>
               <div className='text-center'>
             <button className='btn btn-success' onClick={handleButtonClick} style={{width:'300px',marginTop:'20px',padding:'10px 0px',borderRadius:'15px',fontFamily:'Audiowide'}}>Confirm Order</button>
               </div>
               </form>
             </main>
           </div>
     












    <div className='footer'>
          <Footer />
          </div>
    
    
    
    </>
  )
}

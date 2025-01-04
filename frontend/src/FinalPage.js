import React, { useContext } from 'react';
import { CartContext } from '../src/CartContext';
import Navbar from './navbar';
import Footer from './footer';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link } from 'react-router-dom';
export default function FinalPage() {
  const { cart } = useContext(CartContext); 
  let sum=0
      cart.forEach((item) => {
      const itemTotal = (item.price2 || 0) * (item.quantity || 1);
      sum=sum+itemTotal;
     }); 
  return (
    <>
      <header className="navbar">
        <Navbar size={cart.length} />
      </header>
   
      <h2 style={{ textAlign:'center',fontFamily:'Audiowide',marginBottom:'50px',marginLeft:'20px',marginTop:'15px'
      }}><u>Order Summary</u></h2>

      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Tax</th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>
                <div className='d-flex justify-content-column'>
                  <MdOutlineCurrencyRupee style={{marginTop:'2.5%',height:'20px'}}/>{item.price2}
                  </div>
                </td>
              
                <td>{item.quantity||1}</td>
              
                <td>
                  <div className='d-flex justify-content-column'>
                  <MdOutlineCurrencyRupee style={{marginTop:'2.5%',height:'20px'}}/>{(item.price2*item.quantity)||item.price2}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='container'>
      <h6
          style={{
            fontFamily: 'Audiowide',
            textAlign:'center',
            marginRight: '5px',
          }}
        >
          Total Amount to be paid:
          <MdOutlineCurrencyRupee />{sum}
        </h6>
      </div>
<div className='text-center'>
      <Link to="/payment"><button className='btn btn-success' style={{width:'300px',marginTop:'20px',padding:'10px 0px',borderRadius:'15px'}}>Pay <MdOutlineCurrencyRupee style={{marginTop:'-1%'}}/>{sum}</button></Link>
      </div>
<div className='footer'>
      <Footer />
      </div>
    </>
  );
}

import React, { useContext } from 'react'
import Navbar from './navbar'
import { CartContext } from '../src/CartContext';
import Footer from './footer';
export default function About({size}) {
       const { cart, setCart } = useContext(CartContext);
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
   <header className='navbar'>
   <Navbar size={cart.length}/>
   <p>{size}</p>
   </header>
   <div className='container'>
    <hr></hr>
   <h2 style={{fontFamily:'Audiowide'}}>
   About Us
   </h2>
<p style={{fontFamily:'popins' ,fontSize:'17px'}}>Welcome to Here2Order, the simplest and smartest way to enjoy dining at your favorite restaurants.

Gone are the days of waiting for menus or flagging down busy servers. Here2Order brings convenience right to your table. By scanning the QR code placed at your seat, you can explore the restaurant's menu, customize your orders, and send them directly to the kitchen—all from your smartphone.</p>
   
    <h3 style={{fontFamily:'Audiowide'}}>
    Why Choose Here2Order?  </h3>
        <p style={{fontFamily:'popins',fontSize:'17px'}}>
            <ul>
               <li>
            Quick & Easy: Scan, order, and enjoy your meal without any delays.
            </li>
            </ul>
            <ul>
                <li>
                Contactless Experience: Hygienic and hassle-free, perfect for modern dining needs.
            </li>
            </ul>
            
            <ul>
               <li>
               Customizable Orders: Modify your dishes with ease and ensure your preferences are perfectly communicated.
            </li>
            </ul>

            <ul>
               <li>
               Real-Time Updates: Stay informed about the status of your order, from preparation to serving.
            </li>
            </ul>
          

          <h2 style={{fontFamily:'Audiowide'}}>Our Mission</h2>
            
           <p style={{fontFamily:'popins',fontSize:'20px'}}>At Here2Order, we believe in enhancing dining experiences through innovation. Our platform aims to save time, reduce errors, and create a seamless connection between diners and restaurants.</p>
            
            </p>
  
            <h2 style={{fontFamily:'Audiowide'}}>How It Works ?</h2>
            <ol>
                <li>
                Scan the QR Code at your table using your smartphone.
                </li>
            </ol>
            <ol>
                <li>
                Explore the Menu: Browse detailed descriptions, images, and prices.
                </li>
            </ol>
            <ol>
                <li>
                Place Your Order: Add items to your cart, customize them as needed, and confirm.
                </li>
            </ol>
            <ol>
                <li>
                Relax & Enjoy: Your order is sent to the kitchen and served to your table promptly
                </li>
            </ol>

<hr style={{marginBottom:'50px'}}></hr>



    </div>
    <footer className="footer">
        <Footer/>
      </footer>
    </>
  )
}

import React, { useContext, useEffect, useState } from 'react'
import './nav_style.css';
import img1 from './464.jpg';
import { CartContext } from './CartContext';
import img2 from './223.jpg';
import img3 from './555.jpg';
import res_logo from './res_logo.png';
import './FixNavAndFoot.css';
import Footer from './footer';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

export default function Dashboard({size},props) {
   const { cart, setCart } = useContext(CartContext);
  return (
<>

<header className='navbar'>
<Navbar size={cart.length}/>
<p>{size}</p>
</header>

<title>{props.title}</title>  
<div className='container my-1 text-center'>
<div className='res_logo'>
<img src={res_logo} style={{width:"270px",height:"270px"}}  alt="img_logo"></img>
</div>  
<div className='heading' style={{marginTop:'-60px',fontFamily:"Sofia"}}>
<h2>Here2Order</h2>


</div>
</div>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>


{/* crousel */}


<div id="carouselExampleIndicators" className="carousel slide my-5" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={img1} className="d-block w-100" alt="img1"/>
    </div>
    <div className="carousel-item"  data-bs-interval="2000">
      <img src={img2} className="d-block w-100" alt="img2"/>
    </div>
    <div className="carousel-item"  data-bs-interval="2000">
      <img src={img3} className="d-block w-100" alt="img3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='getstart my-3 text-center'>
<Link to="/coffeeDrinks"><button type="button" className="btn btn-success" style={{fontFamily:'Audiowide',marginBottom:'50px'}}>GET STARTED</button></Link>

</div> 

{/* Footer */}
{/* <Footer/> */}


<footer className="footer">
    <Footer/>
  </footer>
    </>
  )
}

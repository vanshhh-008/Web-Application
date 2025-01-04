import React from 'react'
import './nav_style.css';
import { useState } from 'react';
import {Link} from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBurger } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
export default function Footer() {
  return (
    
    <>

 {/* <hr className='line mb-5'></hr>  */}

<div className='icon1'>
<Link id="button" to="/coffeeDrinks"><FaCoffee className='iconCoffee'/></Link>
</div>
<div className='icon2'>
<Link id = "button" to="/home"><FaHome className='iconHome'/></Link>
</div>  
<div className='icon3'>
<Link to ="/user"><FaUser className='iconUser'/></Link>
</div>  
<div className='icon4'>
<Link to ="/food"><FaBurger id = "button" className='iconBurger'/></Link>
</div>
<div className='icon5'>
<Link to ="/contact"><FaPhone id = "button" className='iconPhone'/></Link>
</div>



    </>
  )
}

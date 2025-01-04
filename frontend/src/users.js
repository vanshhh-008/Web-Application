import React, { useContext, useEffect, useState } from 'react'
import Footer from './footer';
import Navbar from './navbar';

import { CartContext } from '../src/CartContext';
import logo_user from '../src/user2.png';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
export default function Users({size}) {
   
    const { cart, setCart } = useContext(CartContext);
  const { clearCart } = useContext(CartContext); 
const navigate = useNavigate();
    const[loggedInUser,setLoggedInUser] = useState('');

    useEffect(()=>{
    setLoggedInUser(localStorage.getItem('LoggedInUser'));
    },[]);

    const HandleLogout = ()=>{
        clearCart();
        localStorage.removeItem('token');
        localStorage.removeItem('LoggedInUser');
        toast.success("Signout");
        setTimeout(()=>{
navigate('/login');
        },1000)
    }
  return (
    <>
<header className='navbar'>
<Navbar size={cart.length}/>
<p>{size}</p>
</header>
<Toaster toastOptions={{duration:3000}}></Toaster>

<img src={logo_user} style={{width:'180px',height:'180px',display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop:'5%'
  }}></img>
    <h2 style={{textAlign:'center',fontFamily:'Audiowide' ,marginTop:'10px'}}>Welcome {loggedInUser}</h2>
    <button className='btn btn-danger mt-4' onClick={HandleLogout} style={{ display: 'block',
  margin: 'auto'}}>Logout</button>
<footer className="footer">
    <Footer/>
  </footer>
    </>
  )
}

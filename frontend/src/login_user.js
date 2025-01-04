import React, { useContext, useState } from "react";
import "./SignupPage.css";

import './nav_style.css';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "./navbar";
import Footer from "./footer";
import {Link, useNavigate} from "react-router-dom";

const Login = ({size},props) => {

  const [logininfo,setLoginInfo] = useState({
    email:'',
    password:''
  })
  const handleClear = () => {
    setLoginInfo({ name: '', email: '', password: '' });
  };
  const handleChange = (e)=>{
    const{name,value}=e.target;
    console.log(name,value);
    const copyLoginInfo={...logininfo};
    copyLoginInfo[name]=value;
    setLoginInfo(copyLoginInfo);
    

  }
  const navigate = useNavigate();
  const HandleLogin =  async (e)=>{
    e.preventDefault();
    const {email,password}=logininfo;
if(!email||!password){
toast.error("Email and password are required !");
}

try {
    const url = "http://localhost:9000/auth/login";
    const response = await fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body : JSON.stringify(logininfo)
    });
    const result = await response.json();
    console.log(result);
    const{success,message,jwtToken,name,error}=result;
    if(success){
         toast.success("Successfully Logged In");
         localStorage.setItem('token',jwtToken);
         localStorage.setItem('LoggedInUser',name);
         setTimeout(()=>{
             navigate("/home");
         },1000);
   }else if(!success){
   
    toast.error("Don't have an account..create an account!");
   }
} catch (error) {
    console.log(error);
}
  }


  

  return (
    <>
     
      <header className="navbar">
        <Navbar />
 
      </header>
      <Toaster toastOptions={{duration:3000}}></Toaster>
      <div className="app2">
        <header className="header2">
          <h1>LOG IN</h1>
          <p>Fill out the form below to proceed.</p>
        </header>
        <main className="form-container2" style={{marginBottom:'50px'}}>
          <form className="form2" onSubmit={HandleLogin}>
          
            {/* Email */}
            <div className="form-group2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={logininfo.email}
                onChange={handleChange}
                placeholder="Enter your email"
                
              />
            </div>

            <div className="form-group2">
              <label htmlFor="email">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={logininfo.password}
                onChange={handleChange}
                placeholder="Enter your password"
                
              />
            </div>

            
            
            {/* Buttons */}
            <div className="d-flex flex-column">
              <button type="submit" className="btn btn-primary mb-2"  style={{padding:'10px 0px'}}>
                Login
              </button>
             
              <button
                type="button"
                className="btn btn-secondary mb-3" style={{padding:'10px 0px'}}
                onClick={handleClear}
              >
                Clear
              </button>
             
            </div>
            <p style={{textAlign:'center',marginBottom:'2px'}}>Don't have an account?<Link to="/signup" style={{textAlign:'center',textDecoration:'none'}}> Signup</Link></p>
          </form>
          <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' ,marginBottom:'5px'}}>
      <hr style={{ flex: 1, border: '1px solid #ccc' }} />
      <span style={{ margin: '0 10px' }}>Or</span>
      <hr style={{ flex: 1, border: '1px solid #ccc' }} />
    </div>
<div className="Social-media-login d-flex flex-column">
    <button class="social-button google mb-3">
    <i class="fab fa-google"></i>
    Sign in with Google
  </button>
  <button class="social-button facebook">
    <i class="fab fa-facebook-f" ></i>
    Sign in with Facebook
  </button>
  </div>
        </main>

      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import "./SignupPage.css";
import toast, { Toaster } from 'react-hot-toast';
import './nav_style.css';
import './FixNavAndFoot.css';
import Navbar from "./navbar";
import Footer from "./footer";
import {Link, useNavigate} from "react-router-dom";
const SignupForm = (props) => {
  const [signupinfo,setSignUpInfo] = useState({
    name:'',
    email:'',
    password:''
  })
  const handleClear = () => {
    setSignUpInfo({ name: '', email: '', password: '' });
  };
  
  const handleChange = (e)=>{
    const{name,value}=e.target;
    console.log(name,value);
    const copySignUpInfo={...signupinfo};
    copySignUpInfo[name]=value;
    setSignUpInfo(copySignUpInfo);
    

  }
  const navigate = useNavigate();
  const HandleSignUp =  async (e)=>{
    e.preventDefault();
    const {name,email,password}=signupinfo;
if(!name||!email||!password){
toast.error("Email and password are required !");
}

try {
    const url = "http://localhost:9000/auth/signup";
    const response = await fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body : JSON.stringify(signupinfo)
    });
    const result = await response.json();
    console.log(result);
    const{success,error}=result;
    if(success){
         toast.success("Successfully Signup");
         setTimeout(()=>{
             navigate("/login");
         },1000);
   }else if(!success){

  
    toast.error("Already have an account!");
    setTimeout(()=>{
      navigate("/login");
  },1000);
   }


} 

catch (error) {
    toast.error(error);
}
  }


  

  return (
    <>
     
      <header className="navbar">
        <Navbar />
      </header>
      <Toaster toastOptions={{duration:5000}}></Toaster>
      <div className="app2">
        <header className="header2">
          <h1>Sign Up</h1>
          <p>Fill out the form below to proceed.</p>
        </header>
        <main className="form-container2" style={{marginBottom:'55px'}}>
          <form className="form2" onSubmit={HandleSignUp}  >
            {/* Name */}
            <div className="form-group2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
              value={signupinfo.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                
              />
            </div>
            {/* Email */}
            <div className="form-group2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={signupinfo.email}
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
                value={signupinfo.password}
                onChange={handleChange}
                placeholder="Enter your password"
                
              />
            </div>

            
            
            {/* Buttons */}
            <div className="d-flex flex-column">
              <button type="submit" className="btn btn-primary mb-2"  style={{padding:'10px 0px'}}>
                Signup
              </button>
             
              <button
                type="button"
                className="btn btn-secondary mb-3" style={{padding:'10px 0px'}}
              onClick={handleClear}
                 
              >
                Clear
              </button>
             
            </div>
            <p style={{textAlign:'center',marginBottom:'2px'}}>Already have an account?<Link to="/login" style={{textAlign:'center',textDecoration:'none'}}> Login</Link></p>
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

export default SignupForm;

import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(100); 
  const [isTimeOver, setIsTimeOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); 
    } else {
      setIsTimeOver(true); 
    }
  }, [timeLeft]);

 
  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <header className="navbar">
            <Navbar/>
          </header>
          <div className="container">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
    <div style={styles.container}>
      <h1 style={styles.heading}>Your Order Will be on your table within 1 minutes</h1>
      {isTimeOver ? (
        <div>
          <h3 style={styles.timeOver}>Time Over!</h3>
          <h3 style={{textAlign:'center',color:'red'}}>If you haven't receive any order call now ?</h3>
          <div className="text-center">
          <button style={styles.callButton} onClick={() => alert("Calling...")}>
            📞 Call Now
          </button>
        </div>
        </div>
      ) : (
        <div style={styles.timer}>{formatTime(timeLeft)}</div>
      )}
    </div>
    </div>
     <div className="footer">
            <Footer/>
          </div>
    </>
  );
};

// Inline Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  
    fontFamily: "Arial, sans-serif",
  },
  heading: {
  
    fontFamily:'Audiowide',
    fontSize: "1.4rem",
    marginBottom: "20px",
    textAlign:'center'
  },
  timer: {
    fontSize: "3rem",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
  timeOver: {
    textAlign:'center',
    fontSize: "2rem",
    color: "#FF6347",
    marginBottom: "20px",
  },
  callButton: {

    fontSize: "1.5rem",
    padding: "10px 20px",
    backgroundColor: "#32CD32",
    color: "white",
    marginTop:'20px',
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  },
};

export default CountdownTimer;

import React, { useContext, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import toast, { Toaster } from "react-hot-toast";
import { FaComments } from "react-icons/fa";
import { CartContext } from '../src/CartContext';
import { MdAddIcCall } from "react-icons/md";

export default function Contact({ size }) {
  const { cart } = useContext(CartContext);
  const [Review, setReview] = useState("");

  const sentReview = async () => {
    try {
      const response = await fetch("https://web-application-backend-iznc.onrender.com/review", {
        method: "POST",
        body: JSON.stringify({ review: Review }), 
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("review", JSON.stringify(result.review));
        toast.success("Review sent successfully!");
        setReview(""); 
      } else {
        toast.error(result.message || "Failed to send review. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send review. Please try again.");
      console.error("Error sending review:", error);
    }
  };

  return (
    <>
      <Toaster />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Audiowide"
      />
      <header className="navbar">
        <Navbar size={cart.length} />
      </header>
      <div className="container">
        <h2
          style={{
            textAlign: 'center',
            fontFamily: 'Audiowide',
            marginTop: '50px',
          }}
        >
          CONTACT US
        </h2>
        <div className="text-center">
          <h5
            style={{
              textAlign: 'center',
              fontFamily: 'Audiowide',
            }}
          >
            <MdAddIcCall /> 410-5203-7025
          </h5>
          <p>📞 Call Now! if you have any query</p>
          <h5
            style={{
              textAlign: 'center',
              fontFamily: 'Audiowide',
            }}
          >
            Write a Review...
          </h5>
          <div className="form-group">
            <label htmlFor="comments">
              <FaComments style={{ fontSize: '22px' }} /> Comments
            </label>
            <div className="d-flex justify-content-between">
              <textarea
                style={{
                  marginTop: '45px',
                  width: '400px',
                  height: '200px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  border: '1px solid #3B71CA',
                }}
                id="comments"
                value={Review}
                onChange={(e) => setReview(e.target.value)}
                name="comments"
                placeholder="Enter comments"
                required
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={sentReview}
              style={{
                width: '200px',
                fontFamily: 'Audiowide',
                marginTop: '20px',
                height: '50px',
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const AuthRouter = require('./routes/AuthRouter.js');
const Orders = require('./models/orders.js');
const Review = require('./models/review.js');

require('dotenv').config();


require('./models/db.js');

const port = process.env.PORT || 9000;


app.use(bodyParser.json()); 
app.use(cors()); 


app.use('/auth', AuthRouter);

app.post("/confirm", async (req, res) => {
    try {
       
        const { name, email, tableNumber, phoneNumber, comments,  cartItems,totalAmount } = req.body;

        if (!name || !email || !tableNumber || !phoneNumber || !cartItems || cartItems.length === 0) {
            return res.status(400).json({ message: "Invalid order data. Please provide all required fields." });
        }

  
        const newOrder = new Orders({
            name,
            email,
            tableNumber,
            phoneNumber,
            comments,
            cartItems,
            totalAmount
        });

        const savedOrder = await newOrder.save();
        
        
        res.status(201).json({
            message: "Order placed successfully",
            order: savedOrder
        });
    } catch (error) {
        console.error("Error placing the order:", error.message);
        res.status(500).json({ message: "Failed to place the order", error: error.message });
    }
});


app.post("/review", async (req, res) => {
    try {
        const { review } = req.body; 
        if (!review) {
            return res.status(400).json({ message: "Enter a review" });
        }

     
        const newReview = new Review({
            review, 
        });

  
        const savedReview = await newReview.save();


        res.status(201).json({
            message: "Review sent. Thanks!",
            review: savedReview,
        });
    } catch (error) {
        console.error("Error submitting the review:", error.message);
        res.status(500).json({ message: "Failed to submit the review", error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

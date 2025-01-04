const mongoose = require('mongoose');

const mongo_url=process.env.MONGO_CONN;
mongoose.connect(mongo_url)
.then(()=>{
    console.log("MongoDb Users Database Connected");
}).catch((error)=>{
   console.log("Error while connecting to database",error);
})


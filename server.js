const express= require("express");
const errorhandler = require("./middleware/errorhandler");
const app=express();
const dotenv=require("dotenv").config();
const connectDB=require("./config/dbConnection")
//port declare 
const port=process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use("/api/contacts", require( "./routes/route1"));
app.use("/api/users", require( "./routes/userRoute"));
app.use(errorhandler);

//dnt wnt to make cocmplete server because using express. have fuctions like get , send.
app.listen(port,()=>{
    console.log(`server running on the port ${port}`)
});



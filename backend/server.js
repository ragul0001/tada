const express = require('express');
const cors = require('cors');
const body_parse = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const Paymentroute=require("./Router/payment");

dotenv.config(); // Load environment variables from .env file

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  }

    // middleware
app.use(cors(corsOptions))
app.use(cors())
app.use(express.json())
app.use(body_parse.json());
app.use(express.urlencoded({ extended: true }))
app.use(body_parse.urlencoded({ extended: true }));

//port
const PORT = process.env.PORT || 8080

app.get("/",(req,res)=>{
    res.json({message:"Welcome to Backend API"})
})

//server
app.listen(PORT, () => {
  console.log(`server in running on port ${PORT}`)
})
app.use("/api",Paymentroute)
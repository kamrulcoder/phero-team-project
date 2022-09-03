const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


app.get('/',(req,res)=>{
    res.send('server is running')
})


// env  file call function  
dotEnv.config({
    path : 'backend/config/config.env'
})

//use middleware-------------
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}));

// Running server   create function  on Port 
const PORT = process.env.PORT || 4000

// mongoose with database connected 
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));



app.listen(PORT,(error)=>{
    if(!error){
        console.log(`server is running port  ${PORT}`);
    }
})
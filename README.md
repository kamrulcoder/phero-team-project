# `Porgramming hero Team Project `


## `Step  01 || Project File Setup` 

### `Setup Project ` Files  frontend and  backend 
#### `Install  Packege ` for backend development

```bash
yarn add bcrypt body-parser concurrently cors dotenv express mongoose nodemon cookie-parser
```
### `Packege.json` add script 

```json
"scripts": {
    "server": "nodemon backend/server.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \" npm run server \" \" npm run client \""
  },
```
### `server.js` add code  for run server  
```javascript
const express = require('express');
const dotEnv = require('dotenv');
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
app.listen(PORT,(error)=>{
    if(!error){
        console.log(`server is running port ${PORT}`);
    }
})
```

## `Step  02 ||  Database Connection` 
### `dbConnect.js` add Code 
```javascript
const mongoose = require('mongoose');

module.exports = dbConnect = async()=>{
    try {
        const response = await mongoose.connect(process.env.DB_URL,{useNewUrlParser:true});
        console.log("Database connected........")
    } catch (error) {
        console.log(error)
    }
}

```


### `server.js` add Code 
```javascript
const dbConnect = require('./config/dbConnect');

// db connect  called function........
dbConnect();

```

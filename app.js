const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const app = express();

// parsing cookee
app.use(cookieParser());

// seting the path of dotenv config
dotenv.config({ path: "./config.env" });

// requiring the mongo db connection file
require("./db/connection");

// converting from json to understandable form (object)
app.use(express.json());

// linking the router files using middleware
app.use(require("./router/auth"));

const PORT = process.env.PORT || 5000;

app.get("/contact", (req, res) => {
  res.send("HI FROM THE CONTACT");
});

app.get("/signin", (req, res) => {
  res.send("HI FROM THE SIGNIN");
});

app.get("/signup", (req, res) => {
  res.send("HI FROM THE REGISTERATION");
});

if(process.env.NODE_ENV=='production'){
const path = require('path')
app.get('/',(req,res)=>{
  app.use(express.static(path.resolve(__dirname,'client','build')))
  res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})
}

app.listen(PORT, () => {
  console.log(`server is running on  ${PORT}`);
});

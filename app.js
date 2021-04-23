const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const postRoutes = require('./routes/posts');

app.use(bodyParser.json());

//Middleware
app.use("/posts", postRoutes);


// Routes
app.get('/', (req,res)=>{
  res.send("we are on the Home!");
})




//To connect to mongodb
mongoose.connect(process.env.DB_CONNECTION,{useUnifiedTopology:true, useNewUrlParser:true} , ()=>console.log("Connected to DB!"));

//To start listening to server
app.listen(3000);

const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
const app = express();
require('dotenv').config();
const bcrypt = require('bcrypts.js');
const salt = 10;

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(express.static('public'));
app.listen(port, ()=>{
  console.log(`Running on port ${port}`);
});

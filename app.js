const express = require('express');
const bodyParser = require('body-parser'); //for submitted data


// const sqlite3 = require("sqlite3");
// const db = require('./db/db');

const app = express();

const path = require('path');

const homeRoutes = require('./routes/home');
const adminRoutes = require('./routes/admin');


//for static css
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true})); //for submitted data

app.use(homeRoutes);
app.use(adminRoutes);

//page not found
app.use((req,res,next)=>{
   
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000, ()=>{
    console.log('server started at port 3000');
});
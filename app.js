const express = require('express');
const bodyParser = require('body-parser'); //for submitted data


// const sqlite3 = require("sqlite3");
// const db = require('./db/db');

const app = express();

const path = require('path');

const homeRoutes = require('./routes/home');
const adminRoutes = require('./routes/admin');

//Set the template engine (ejs for dynamic html)
app.set('view engine', 'ejs');
//the path by default is /views but we ll do it anws
app.set('views', 'views')


//for static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true})); //for submitted data

//routes
app.use(homeRoutes);
app.use(adminRoutes);

//page not found
app.use((req,res,next)=>{
   
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(5020, ()=>{
    // console.log("test");
    console.log('server started at port 5020');
});

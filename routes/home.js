const express = require('express');
const path = require('path'); //to load html files
const router = express.Router();

const fs = require('fs');

const  db = require(path.join(__dirname, '../','db','db'));

let messages =[]

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'homepage.html'));
     db.all("SELECT * FROM users WHERE username NOT IN ('admin', 'admin312324435')", (err, rows) => {
        if (err) {
            return console.error('Error fetching users from database:', err.message);
        }
        res.render('homepage', { members: rows });
    });
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
});

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'about.html'));
});

router.get('/admin', (req, res) => {
    res.send('<h1 style="text-align: center; color: red;">Access Denied</h1><p style="text-align: center;">You do not have permission to view this page.</p>');
});

router.post('/login', (req, res) => {
    console.log(req.body); //json req//req body exists bc i used body parser
    console.log(req.body.username); //cs bl form aande username
    console.log("Post request");
    // res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
    login(req,res);
});


//admin312324435' AND 1=1; --
function login(req,res){
    // Assuming you have username and password in the request body
    const username= req.body.username;
    const password = req.body.password;
    console.log(username);
    
    const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "';";
    db.get(query, (err, row) => {
        if (err) {
            console.error('Error searching for user:', err.message);
            res.status(500).send('Internal Server Error');
            return;
        }

        if (!row) {
            // User not found in the database
            res.status(401).send('Invalid username or password');
            return;
        }
        else if(row.username=='admin312324435')
        {
            res.send('CSCTF{C0NGR4T5_W4S_TH!3_FL4G_E43Y_F0R_Y0U?}');
        }
        else{
            console.log(row.username);
            res.status(200).send('Nope, not enough');
        }
        
    });
}

//' OR 1=1; --
router.post('/search', (req,res)=>{
    console.log(req.body.searchInput);
    const searchInput = req.body.searchInput;

   
    const query = "SELECT * FROM users WHERE username = '" + searchInput + "';";
    // Execute the query to search for users
    db.all(query, (err, rows) => {
        if (err) {
            console.error('Error searching for users:', err.message);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (!rows) {
            // User not found in the database
            res.status(401).send('Invalid username');
            return;
        }
        else{
            const modifiedRows = rows.map(row => {
                // Create a new object with all properties except password
                const { password, ...rowWithoutPassword } = row;
                return rowWithoutPassword;
            });
        
            // Send the modified rows as a response
            res.json(modifiedRows);
        }
    });
})



router.post('/submit_message', (req, res) => {
    // Extract form data
    const { name, email, message } = req.body;

    messages.push(message);
   
    // Construct the response HTML by reflecting user input
    const responseHTML = `
        <h1>Thank You!</h1>
        <p>Hi ${name}, your message has been submitted successfully.</p>
        <p>We will get back to you soon. your message: ${message}</p>
    `;

    // Send the response HTML back to the client
    res.send(responseHTML);
});


router.get('/get-messages', (req, res) => {
   
    
    // Create an HTML string with messages as list items
    const htmlString = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Messages</title></head><body><h1>Messages</h1><ul>${messages.map(message => `<li>${message}</li>`).join('')}</ul></body></html>`;
    
    res.send(htmlString); // Send HTML string as response

    // res.sendFile(path.join(__dirname, '../', 'views', 'messages.html'));

    //-------------------------------------


    //try it with separate html file
   
});

module.exports = router;
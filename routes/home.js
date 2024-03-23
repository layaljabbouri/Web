const express = require('express');
const path = require('path'); //to load html files
const router = express.Router();

const  db = require(path.join(__dirname, '../','db','db'));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'homepage.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
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
            res.send('CS_FLAG{C0NGR4T5_W4S_TH!3_FL4G_E43Y_F0R_Y0U?}');
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



module.exports = router;
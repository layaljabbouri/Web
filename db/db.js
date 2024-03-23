const sqlite3 = require('sqlite3').verbose();



const db = new sqlite3.Database('myDatabase',sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        return console.error('Unable to open database file:', err.message);
    }
    console.log('Connected to the database.');
});


  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name,
        last_name,
        username UNIQUE,
        password,
        email
    )`);
    
//     // Insert six elements into the users table
//     const insertStmt = db.prepare(`INSERT INTO users (first_name, last_name, username, password, email) VALUES (?, ?, ?, ?, ?)`);
//     for (let i = 1; i <= 6; i++) {
//         insertStmt.run(`First${i}`, `Last${i}`, `user${i}`, `password${i}`, `user${i}@example.com`);
//     }
// //     // insertStmt.finalize(); // Finalize the prepared statement after running all insertions

// //     // insertStmt = db.prepare(`INSERT INTO users (first_name, last_name, username, password, email) VALUES (?, ?, ?, ?, ?)`);
//     insertStmt.run(`admin`, `admin`, `admin`, `I_4M_TH3_4dm!n@`, `admin@centralesupelec.fr`);

//     insertStmt.run(`admin213435`, `admin12314`, `admin312324435`, `I_4M_TH3_4dm!n@@$#$%@`, `admin@centralesupelec.fr`);
    // insertStmt.finalize(); // Finalize the prepared statement after running all insertions

    

});

module.exports = db;

const sqlite3 = require('sqlite3').verbose();



const db = new sqlite3.Database('myDatabase',sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        return console.error('Unable to open database file:', err.message);
    }
    console.log('Connected to the database.');
});


//   db.serialize(() => {
//     db.run(`CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         first_name,
//         last_name,
//         username UNIQUE,
//         password,
//         email
//     )`);
//     db.run(`DELETE FROM users`, (err) => {
//         if (err) {
//             return console.error('Error deleting rows:', err.message);
//         }
//         console.log('All rows deleted from the users table.');
//     }
    
// //     // Insert six elements into the users table
// //     const insertStmt = db.prepare(`INSERT INTO users (first_name, last_name, username, password, email) VALUES (?, ?, ?, ?, ?)`);
// //     for (let i = 1; i <= 6; i++) {
// //         insertStmt.run(`First${i}`, `Last${i}`, `user${i}`, `password${i}`, `user${i}@example.com`);
// //     }
// // //     // insertStmt.finalize(); // Finalize the prepared statement after running all insertions

// // //     // insertStmt = db.prepare(`INSERT INTO users (first_name, last_name, username, password, email) VALUES (?, ?, ?, ?, ?)`);
// //     insertStmt.run(`admin`, `admin`, `admin`, `I_4M_TH3_4dm!n@`, `admin@centralesupelec.fr`);

// //     insertStmt.run(`admin213435`, `admin12314`, `admin312324435`, `I_4M_TH3_4dm!n@@$#$%@`, `admin@centralesupelec.fr`);
//     // insertStmt.finalize(); // Finalize the prepared statement after running all insertions

    

// });


// db.serialize(() => {
//     db.run(`CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         first_name TEXT,
//         last_name TEXT,
//         username TEXT UNIQUE,
//         password TEXT,
//         email TEXT
//     )`, (err) => {
//         if (err) {
//             return console.error('Error creating table:', err.message);
//         }
//         // console.log('Users table created or already exists.');
        
//     });
// });


db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT,
        last_name TEXT,
        username TEXT UNIQUE,
        password TEXT,
        email TEXT
    )`, (err) => {
        if (err) {
            return console.error('Error creating table:', err.message);
        }

        // Insert users
        // const users = [
        //     { first_name: 'Pierre-Francois', last_name: 'Gimenez', username: 'pfgimenez', password: 'P1erreF@ncois', email: 'pierre-francois.gimenez@centralesupelec.fr' },
        //     { first_name: 'Jean-Francois', last_name: 'Lalande', username: 'jflalande', password: 'J3anFr@ncois', email: 'jean-francois.lalande@centralesupelec.fr' },
        //     { first_name: 'Guillaume', last_name: 'Hiet', username: 'ghiet', password: 'Gu1llaumeHiet@', email: 'guillaume.hiet@centralesupelec.fr' },
        //     { first_name: 'Ruben', last_name: 'Salvador', username: 'rsalvador', password: 'RubeN5alvador!', email: 'ruben.salvador@centralesupelec.fr' }
        // ];

        //  const users = [
        //     { first_name: 'Pierre', last_name: 'Wilke', username: 'pwilke', password: 'P1erre#2024!', email: 'pierre.wilke@centralesupelec.fr' },
        //     { first_name: 'Christophe', last_name: 'Bidan', username: 'cbidan', password: 'Bidan@2024', email: 'christophe.bidan@centralesupelec.fr' },
        //     { first_name: 'Frederic', last_name: 'Tronel', username: 'ftronel', password: 'Frederic*Paris', email: 'frederic.tronel@centralesupelec.fr' },
        //     { first_name: 'Nabil', last_name: 'Sadou', username: 'nsadou', password: 'NSadou#2024!', email: 'nabil.sadou@centralesupelec.fr' }
        // ];

        // const users = [
        //         { first_name: 'admin', last_name: 'admin', username: 'admin', password: '!4m_th3_4dmin_3_p4$$word', email: '' },
        //         { first_name: '', last_name: '', username: 'admin312324435', password: '$Tr0nGerP@$$w0rdF0r4dm!n!', email: '' },
        //     ];

        // const insertStmt = db.prepare(`INSERT INTO users (first_name, last_name, username, password, email) VALUES (?, ?, ?, ?, ?)`);
        // users.forEach(user => {
        //     insertStmt.run(user.first_name, user.last_name, user.username, user.password, user.email, (err) => {
        //         if (err) {
        //             console.error('Error inserting user:', err.message);
        //         } else {
        //             console.log(`User ${user.username} inserted successfully.`);
        //         }
        //     });
        // });
        // insertStmt.finalize(); // Finalize the prepared statement after running all insertions
    });
});


module.exports = db;

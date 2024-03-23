const express = require('express');
const path = require('path'); //to load html files
const router = express.Router();

router.get('/private', (req, res) => {
    res.send(' CS_FLAG{BR4V0_Y0U_JU5T_F0UND_4_FL4G!}');
});

router.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'robots.txt'));
});


module.exports = router;
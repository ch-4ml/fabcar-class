const express = require("express");
const router = express.Router();

// ์กฐํ
router.get('/', (req, res) =>{
    res.render('get');
}); 

// ์์ฑ
router.get('/new', (req, res) =>{
    res.render('set');
});

module.exports = router;
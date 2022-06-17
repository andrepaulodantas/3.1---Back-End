const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var cors = require('cors')

router.use(cors());

router.get("/all", (req, res)=>{

    res.json(JSON.stringify(posts.getAll()))

})

module.exports = router;

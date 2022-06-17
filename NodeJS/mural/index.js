const PORT = 2000;
const express = require('express');
const apiRoute = require('./routes/api');

const path = require('path');

const app = express();

var cors = require('cors')

app.use(cors())

app.use('/api', apiRoute); //essa linha deve ser chamada primeiro
app.use('/', express.static(path.join(__dirname, "public")));

app.listen(PORT, ()=>{
    console.log("Server running on port", PORT)
})


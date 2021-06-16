const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var aluno = require("./routes/aluno")


app.use(bodyParser.urlencoded())

app.use("/araujo", aluno);


app.get("/", (req, res) => {
    res.send("Hello World")
})


app.listen(3000, ()=>
    console.log('Server Running')
)
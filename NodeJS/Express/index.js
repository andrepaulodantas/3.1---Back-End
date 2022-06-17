const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

let alunos = [{ id: 0, nome: "Andre"},
{id: 1, nome: "Juliana"},
{id: 2, nome: "Izolda"},
{id: 3, nome: "Nova"}]

let consoleBody = (req, res, next) => {
    console.log(req.body);
    next()
}

let hello = (req, res) =>{
    res.send("Olá");
}

var cors = require('cors')

app.use(cors())


app.use("/meusite", express.static(path.join(__dirname, 'Client')))

// app.use("/", bodyParser.json())
app.use(bodyParser.urlencoded())
app.use("/", consoleBody)

app.get("/", hello)

app.get("/aluno/:id",(req, res)=>{

    console.log(req.params.id);
    let aluno = alunos[req.params.id]
    res.json(aluno);

    // res.json(JSON.stringify(alunos))
   
    // res.type("html");
    // res.send("<h2>Olá From GET</h2>");
})

app.post("/",(req, res)=>{

    // console.log(req);
    // res.json({name: "Andre"})
    // res.type("html");
    // res.send("<h4>Olá From POST</h4>");
})

app.put("/",(req, res)=>{

    res.type("html");
    res.send("<h4>Olá From PUT</h4>");
})

app.delete("/",(req, res)=>{

    res.type("html");
    res.send("<h4>Olá From DELETE</h4>");
})

const PORT = 2000;
app.listen(PORT, ()=>{
    console.log(`Server Running on Port:${PORT}`)
})
const PORT = 3000;
const express = require('express');
const apiRoute = require('./routes/api');
const fs = require('fs')

const path = require('path');

const app = express();

var cors = require('cors')

app.use(cors())

app.use('/api', apiRoute); //essa linha deve ser chamada primeiro
// app.use('/', express.static(path.join(__dirname, "public")));

// let user = {
//     id: 0,
//     name: "RECADINHOS",
//     phone: "+55 21 97222-0000",
// }

// function render (data, obj) {
//     for(let key in obj){
//         data = data.replace(`{${key}}`, obj[key]);
//     }

//     return data;
// }

// app.get("/", (req, res)=>{
//     fs.readFile('./public/index.html', 'UTF8', (err, data) => {
//         if (!err) {

//             // data = data.replace("Mural", user.name);
//             // res.send(data);

//             res.send(render(data, user));
//         }
//     })
// })


//TEPLATE EJS

let users = [
    {
    id: 0,
    name: "RECADINHOS",
    phone: "+55 21 97222-0000"
    },
    {
    id: 1,
    name: "FESTA",
    phone: "+55 21 97222-0000"
    },
    {
    id: 2,
    name: "COMIDA",
    phone: "+55 21 97222-0000"
    }
]

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.get("/",(req, res) =>{

    //res.render('user', { name: "TEXTO", phone: "+55 21 97222-0000" });
    res.render('user', {users});

})

app.get("/about",(req, res) =>{

    //res.render('user', { name: "TEXTO", phone: "+55 21 97222-0000" });
    res.render('about');

})

app.listen(PORT, ()=>{
    console.log("Server running on port", PORT)
})

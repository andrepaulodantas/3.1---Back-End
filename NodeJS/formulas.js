let calc = require('./calc')
let args = process.argv.slice(2)

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

if (args[0] == "+"){
    c = calc.soma(a, b);
} else if (args[0] == "-"){
    c = calc.dim(a, b);
} else if (args[0] == "m"){
    c = calc.mult(a, b);
} else if (args[0] == "d"){
    c = calc.div(a, b);
} else {
    c = "Opção inválida"
}

console.log(c)

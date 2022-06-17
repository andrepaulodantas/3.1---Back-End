// let a = 10;
// let b = 90;
// let c = soma(a , b);

// function soma(x, y){
//     return x + y;
// }

// console.log(c);

// let t = 55;
// let f = ((9 * t) / 5) + 32;

// console.log("A temperatura em graus ºc é: " + t + " ºC" + 
// " em ºf corresponde: " + f + " ºF");

// let num = 10;
 
//     if (num % 2 == 0){
//      console.log("O numero: é PAR")
//     } else {
//      console.log("O numero: é ÍMPAR")
//     }

// let pc = parseInt(Math.random() * 5);

// let jogador = parseInt("2");

// if (jogador == pc){
//     console.log("PARABÉNS! Você conseguiu me vencer!")
// } else {
//     console.log("GANHEI! Eu pensei no número " +jogador+ " e não no " +pc+ "!")
// }

// let args = process.argv.slice(2);
     
// let dist = Number(args[0]);

// if (dist <= 200){
//     preco = dist * 0.50
// } else {
//     preco = dist * 0.45
// }

// console.log("Qual é a distrância de sua viagem? " +dist);
// console.log("Você está prestes a começar uma viagem de  " +dist+ "km");
// console.log("E o preço da sua passagem será de R$" +preco)

// let args = process.argv.slice(2);

// var a = Number(args[0]);
// var b = Number(args[1]);
// var c = Number(args[2]);

// function menorNum (){
// let menor = a;
//     if (b < a && b < c){
//     return menor = b
//     }
//     if (c < a && c < b){
//     return menor = c
//     }
// }

// function maiorNum (){
// let maior = a;
//     if (b > a && b > c){
//     return  maior = b
//     }
//     if (c > a && c > b){
//     return  maior = c
//     }
// }

// console.log("O menor valor digitado foi: " +menorNum())
// console.log("O maior valor digitado foi: " +maiorNum())

// // The following variables are defined in the global scope
// var num1 = 20,
//     num2 = 3,
//     name = 'Chamakh';

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // Returns 60

// // A nested function example
// function getScore() {
//   var num1 = 2,
//       num2 = 3;

//   function add() {
//     return name + ' scored ' + (num1 + num2);
//   }

//   return add();
// }

// console.log(getScore()); // Returns "Chamakh scored 5"

// let fs = require('fs');

// fs.readFile("André_Araújo.txt", "UTF8", function(error, data){

//     if(error) {throw error};

//     //console.log("Arquivo renomeado com sucesso")
//     console.log(data)
// } )

let fs = require('fs');

let args = process.argv.slice(2);

let fileName = args[0];

fs.readFile(fileName, "UTF8", (error, data)=>{

    if (error) throw error;

    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error)=>{

        if(error) throw error;
        console.log("Arquivo gerado com sucesso");
    })

});
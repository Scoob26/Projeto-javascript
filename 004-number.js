/*
    Number
    parseInt
    parseFloat
*/
//conversão de string para numero
var idade = "20"
console.log(typeof idade, idade)
var idade = Number("20")
console.log(typeof idade, idade)

//converter boolean para numero
var numero = Number(false)
console.log(typeof numero, numero)
var numero = Number(true)
console.log(typeof numero, numero)

//converter date para numero
var numero = Number(new Date())
console.log(typeof numero, numero)

//CONVERTER DE STRING PARA NUMERO USANDO O PARSEINT
var n = "29.23"
console.log(typeof n, n)
console.log(typeof parseInt(n), parseInt(n))

//CONVERTER DE STRING PARA NUMERO USANDO O PARSEFLOAT
var n = "29.23"
console.log(typeof n, n)
console.log(typeof parseFloat(n), parseFloat(n)) 

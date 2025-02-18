const primeiro = 10
const segundo = 2
const terceiro = 5

function soma(){
    printText()
    var res = segundo + terceiro
    return "resultado: " + (segundo + terceiro)
}

function printText(){
    console.log("printando algo")
}

//function somaComParametro(n1, n2, n3){
//    return n1 + n2 + n3

//    console.log(somaComParametro(1, 2 ,3))
//}

//const somaComParametro = (n1, n2, n3) => n1 + n2 + n3
//console.log(somaComParametro(2, 2, 2))

const test = () => "Texto qualquer"
console.log(test())
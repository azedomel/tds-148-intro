// console.log("Olá alunos")

//VARIAVEIS
//Alocando uma informação no espaço da memória

let nome = "Lucas"
//String

const idade = 18
//number

var temCabelo = true
//boolean

//console.log(typeof nome, nome)
//console.log(typeof idade, idade)
//console.log(typeof temCabelo, temCabelo)

var temCabelo = "mais uma"
//console.log(temCabelo)

var preco = 25
var quantidade = 5
var desconto = 10
var total = (preco * quantidade) - desconto

//console.log(total)

var sobrenome, cidade, ano
sobrenome = "Pereira"
cidade = "Curitiba"
ano = 2025

console.log(nome, sobrenome, cidade)
console.log("Meu nome é "+ nome + " " + sobrenome + ", moro em " + cidade + ".")
//concatenando com +, igual ao java
console.log(`Meu nome é ${nome} ${sobrenome}, eu moro em ${cidade}.`)
//concatenando com ${}
let valoresA = []
let valorini
let valoresB = []
let valoralet
let resultado


for (let i = 0; i < 5; i++) {
    valorini = Number(prompt("Digite 5 valores "))
    valoresA.push(valorini)
}


console.log(valoresA)
for (let i = 0; i < 5; i++) {
    valoralet = Math.floor(Math.random() * 100)
    valoresB.push(valoralet)
}

console.log(valoresB)

for (let i = 0; i < 5; i++) {
    resultado = valoresB[i] * valoresA[i]
    console.log(resultado)
}

let valorado = []
let valor
let intervalado
let intervalo2
for (let i = 0; i < 10; i++) {
    valor = Number(prompt("Digite 10 numeros "))
    valorado.push(valor)
}

intervalado = Number(prompt("Digite o primeiro valor do intervalo"))

intervalo2 = Number(prompt("Digite o segundov valor do intervalo"))

for (let i = 0; i < 10; i++) {

    if (valorado[i] >= intervalado && valorado[i] < intervalo2)

        console.log(`Indice: ${i} Valor: ${valorado[i]}`)
}

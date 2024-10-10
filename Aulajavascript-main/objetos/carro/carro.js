let carrosvitor = []
let alternativas, i, a, cont = 1
do {
    let carros = {
        model: prompt("Qual o modelo do carro?"),
        ford: prompt("Qual a marca do carro?"),
        ano: prompt("Qual o ano do carro?"),
        price: Number(prompt("Qual o valor do carro?"))
    }
    carrosvitor.push(carros)

    console.log(`Carro: ${cont} \nModelo: ${carros.model}\nMarca: ${carros.ford}\nAno do carro: ${carros.ano}\nValor do carro: ${carros.price}\n`)

    alternativas = Number(prompt("Se deseja continuar a inserir dados, pressione 1, caso queira finalizar pressione 0"))
    cont++
}

while (alternativas != 0);

if (carrosVetor.length > 0) {
    carroMaisCaro = carrosvitor[0];

    for (i = 1; i < carrosVetor.length; i++) {
        if (carrosvitor[i].price > carroMaisCaro.price) {
            carroMaisCaro = carrosvitor[i];
        }
    }

    console.log(`Carro mais caro:\nModelo: ${carroMaisCaro.model}\nMarca: ${carroMaisCaro.ford}\nAno do carro: ${carroMaisCaro.ano}\nValor do carro: ${carroMaisCaro.price}\n`);
} else {
    console.log("Nenhum carro foi adicionado.");
}


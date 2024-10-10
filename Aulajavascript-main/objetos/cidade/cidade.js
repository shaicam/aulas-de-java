let pessoa = {
    nome :   "jair",
    idade : 20,
    cidade : "patrocinio"
};

console.log ("dados da pessoa", pessoa);


 let mudanca = prompt('1 para nome. 2 para idade. 3 para cidade.');

 if (mudanca == 1){

    let nomenovo = prompt ("digite o novo nome:");
    pessoa.nome = parseInt(nomenovo);
    console.log ("alterações feitas =", pessoa);

 }

 if (mudanca == 2){

    let idadenova = prompt ("digite a nova idade");
    pessoa.idade = parseInt(idadenova);
    console.log ("altrações feitas =" , pessoa);
 }

 if (mudanca == 3){

    let cidadenova = prompt ("digite a nova cidade");
    pessoa.cidade = parseInt(cidadenova);
    console.log ("alterações feitas =" , pessoa);



 }
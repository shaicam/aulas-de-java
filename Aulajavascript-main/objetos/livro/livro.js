let livrotop = {}
let livropaia = {}

livrotop.nome = prompt("Qual o nome do livrotop? ")
livrotop.autor = prompt("Qual o nome do autor do livrotop? ")
livrotop.publi = prompt("Qual o ano de publicação do livrotop? ")

livropaia.nome = prompt("Qual o nome do livropaia? ")
livropaia.autor = prompt("Qual o nome do autor do livropaia? ")
livropaia.publi = prompt("Qual o ano de publicação do 2° livropaia? ")

if (livrotop.publi < livropaia.publi) {
    console.log(`Livro mais antigo: ${livrotop.nome}\nAno de fundação: ${livrotop.publi}`)
}
else {
    console.log(`Livro mais antigo: ${livropaia.nome}\nAno de fundação: ${livropaia.publi}`)
}

if (livrotop.nome == 'Estudando Programação' || livropaia.nome == 'Estudando Programação') {
    console.log("O nome do livro é Estudando Programação? (sim)")
}
else {
    console.log("O nome do livro é Estudando Programação? (nao)")
}

if (livrotop.autor == livropaia.autor) {
    console.log(`Os 2 livros são do autor ${livrotop.autor} `)
}
else {
    console.log(`Os livros são de 2 autores diferentes, sendo eles: ${livrotop.autor} e ${livropaia.autor}`)
}
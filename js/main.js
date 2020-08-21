var nome = "Matheus Carregal";
var idade = 18;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//Lista
var lista = ["maça","pera","laranja"];
//Dicionário
var fruta = {nome:"maça", cor:"vermelha"};
//Lista de Dicionário
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
//adiciona um elemento na lista
lista.push("uva");
//remove um elemento na lista
lista.pop();
//alert("Bem vindo " + nome);
//alert (nome +" tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão","Brasil"));
console.log(frase.toLowerCase());
console.log(lista);
console.log(lista[0]);
//tamanho da lista
console.log(lista.length);
//printa a lista ao contrario
console.log(lista.reverse());
//transforma todos os elementos do array em uma unica string separados por virgula
console.log(lista.toString());
//mesma coisa que o tostring, porem pode escolher como separa as palavras
console.log(lista.join(" - "));
console.log(fruta);
console.log(fruta.cor);
//alert(fruta.cor);
console.log(frutas);
console.log(frutas[1].cor);
//alert(frutas[0].nome);

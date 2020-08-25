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

//bota uma pergunta pro usuário responder
/*
var idade = prompt("Qual sua Idade?")
if(idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de Idade");
}

var cont = 0;
while (cont <= 5){
    console.log(cont);
    cont++;
}

var i;
for(i=0;i<=5;i++){
    alert(i);
}

//traz a data atual
var d = new Date();
alert(d);
alert(d.getDay);

function soma(n1, n2){
    return n1+n2;
}

function setReplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
alert(soma(5,10));

function validaIdade(idade3){
    var validar = true;
    if (idade3 >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade3));
*/

function botao(){
    //alert("Valeu por clicar");
    //pega o elemento pelo id, e insere um html com o inner
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
}
function redirecionar(){
    //formas para redirecionar para outra pagina web
    window.open("https://www.google.com.br/?safe=active");
    window.location.href = "https://www.google.com.br/?safe=active";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse!"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!"
}

function load(){
    alert("Pagina carrega!");
}

function change(elemento){
    console.log(elemento.value);
}
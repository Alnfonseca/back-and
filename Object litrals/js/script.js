//object literals

 //objeto: pessoa;
 // Atributos: Nome, idade; 
 //instância: João, 30;

 const objetoPessoa = {
    nome:"João",
    idade:30

 };
 console.log(objetoPessoa.nome);
console.log(objetoPessoa);
console.log(typeof objetoPessoa);

//removendo uma propriedade de um objeto

const pessoa = {
    nome: "Morgana",
    idade: 40
};
console.log(pessoa);
delete pessoa.idade;
console.log(pessoa);

//adicionando uma propriedade a um objeto 

const funcionario = {
        nome: "Luiz",
    matricula: 34567
};
console.log(funcionario);
funcionario.sobrenome = "Santana";
console.log(funcionario);

// metodo assign, une informações de outros objetos em um novo objeto

const objeto1 = {
    nome:"Jõao",
    idade:25
};
const objeto2 = {
    altura: 1.80,
    gênero: "masculino"
};
const objDestino = {

};
Object.assign(objDestino, objeto1, objeto2);
console.log(objDestino);

//metodo keys, trás todas as infomações de um objeto para outro e lista em uma array

const objeto = {
    nome:"Joaquim",
    idade: 21,
};
const chaves = Object.keys(objeto);
console.log(chaves);

//mutação de objetos 

//atribuição, troca o dado que esta armazenado para um novo
const hospede = {
    nome: "Alberto"
};
hospede.nome = "Júnior";
console.log(hospede);

// inserção, adiciona uma informação noma
hospede.sobrenome = "Lima";
console.log(hospede);

//operador de adição
const hospedeNovo = {
    nome: "Mariana",
    idade: 56
};
hospedeNovo.idade += 2;
console.log(hospedeNovo.idade);// somou oais dois anos na idade da mariana
// deletar
delete hospedeNovo.nome;
console.log(hospedeNovo);

//metodo string: trim, tira os espaços em branco do começo ou do final do texto

const textoEspacado = "      Essa é uma string com espaços em branco";
console.log(textoEspacado);

const textoSemEspaços = textoEspacado.trim();
console.log(textoSemEspaços);

//padStart

const numero = "1234";
//preencher com zeros para atingir 8 caracteres no começo
const numeroFormatado = numero.padStart(8, "0");
console.log(numeroFormatado);

const codigo = "ABC";
//preencher com traços para atingir 5 caracteres
const codigoPreenchido = codigo.padStart(5,"-");
console.log(codigoPreenchido);

//split 
const texto = "Essa é uma string com espaços em branco";
//divide a string em um array de letras, usando espaços como separadores
const letras = texto.split("");
console.log(letras);
//divide a string em uma array de números, acrescentando a vírgula como separadores
const numeros2 = "1,2,3,4,5".split("");
console.log(numeros2);
//divide o texto em strings separadas por palavras
const partes = texto.split(" ",8);
console.log(partes);

//join
const numerosJoin = [1, 2, 3, 4, 5];
console.log(numerosJoin);
console.log(typeof numerosJoin); 
//transorma um array em uma string
const listaNumeros = numerosJoin.join(); 
console.log(listaNumeros);
console.log( typeof listaNumeros);

//Junta os numeros com traço como separador (transformando o array em uma string)
const listaNumerosTraços = numerosJoin.join("-");
console.log(listaNumerosTraços);

//transforma um array em string e acrescenta uma strigng desejada na string transformada ("e")
const frutas = ["maçã", "banana", "laranja"];
const textoFrutas = frutas.join(" e ");
console.log(textoFrutas);

//repeat

const testandoRepeat = "Olá";
//repetindo
const textRepeat = testandoRepeat.repeat(3);
console.log(textRepeat);
//repetindo a string 0 vezes
const textoVazio = testandoRepeat.repeat(0);
console.log(textoVazio);

/*rest operator, começa colocando valores fixos que já estao com espaço reservado,
 e com o args poder colocais mais informações dentro de uma array*/
function minhaFuncao(a, b, c, ...args){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(args);
}
minhaFuncao(1, 2, 3, 4, 5);

//iterando sobre uma array
const frutasA = ["maçã", "uva", "melancia"];
for(const fruta of frutasA){
    console.log(fruta);
}

//desestrututrando objetos
const usuario = {
    primeiroNome: "José",
    sobrenome: "Xavier",
    profissao: "Pedreiro"
};
const [primeiroNome, sobrenome, profissao] = Object.values(usuario);
console.log(primeiroNome, sobrenome, profissao);

//desestruturando array
const array = ["João", "Maria", "Pedro"];
const [primeiro, segundo, terceiro] = Object.values(array);
console.log(primeiro, segundo);

const [quarto, quinto, sexto] = array;
console.log(quarto, quinto);
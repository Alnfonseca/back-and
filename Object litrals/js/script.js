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
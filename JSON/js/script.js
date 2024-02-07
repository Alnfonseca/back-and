// Objeto de JS
const pessoa = {
nome: "Maria",
idade: 52,
profissao: "Desenvolvedor de Sistemas"
}


//Transformando um objeto em JSON
const stringJSON = JSON.stringify(pessoa); //converte o objeto js para JSON
console.log(stringJSON);
console.log(typeof stringJSON);

//convertendo de volta para o JSON para objeto
const pessoa2  = JSON.parse(stringJSON); // converte de JSON para objeto js
console.log(pessoa2);

//JSON

const meuJSON
 = '{"nome": "Junior", "idade": 21, "skills":["HTML", "CSS", "JavaScript"]}';
console.log(meuJSON);
console.log( typeof meuJSON);

//JSON para objeto e objeto para JSON
const meuObjeto = JSON.parse(meuJSON);
console.log(meuObjeto);

console.log(meuObjeto.nome);
console.log(typeof meuObjeto);

//JSON inválido
const invalidoJSON = '{"nome": Júnior, "idade": 21}';

const novoInvalidoJSON = JSON.parse(invalidoJSON);
console.log(invalidoJSON);
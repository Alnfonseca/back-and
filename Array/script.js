//Array
 
const array = ["João", "Maria", "José"];
 
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array);
 
//adicionando elemento ao final do array
const listaNomes = ["João", "Maria"];
listaNomes.push("Beatriz");
console.log(listaNomes);
 
//remover o último elemento do array
listaNomes.pop();
console.log(listaNomes);
 
//remover um elemento especifico do array
const arrayNomes = ["João", "Maria", "José"];
// delete arrayNomes[1] (remove o nome mas mantém o espaço)
 
arrayNomes.splice(1,1); //remove da lista completamente 
console.log(arrayNomes);
 
//alterando um elemento do array
const arrayNomes2 = ["João", "Maria", "José"];
arrayNomes2[0] = "Pedro"; // ou arrayNomes.splice(0,1,"Pedro")
console.log(arrayNomes2);
 
//Percorrendo o array com loop for
const listNome = ["Jennifer", "Maria", "José"];
for(let i = 0; i < listNome.length; i++){
    console.log(listNome[i])
}
 
//percorrer o array com o loop forEach
const arrayList = ["Jennifer", "Marcio", "Ingrid"]
arrayList.forEach((nome) => {
    console.log(nome)
});
 
//concatenar duas array
const numeros = [6, 7, 8];
console.log(numeros.length);
 
const outrosNumeros = [3,9,2];
const juncaoNumeros = numeros.concat(outrosNumeros);
console.log(juncaoNumeros);
 
//shift (remove o primeiro elemento)
const nomes = ["João", "Maria", "José"];
const primeiroNome = nomes.shift();
console.log(nomes);
 
//unshift (Adiciona um elemento no ínicio )
const numerosTeste = [1,2,3];
numerosTeste.unshift(8);
console.log(numerosTeste);
 
//indexOf (retornar a posição procurando frente para traz)
const frutas = ["maçã", "banana", "manga", "abacaxi"];
console.log(frutas.indexOf("maçã"));
console.log(frutas.indexOf("laranja")); // retorna -1 pois não exite laranja na lista
 
//lastIndexOf (retornar a posição procurando traz para frente)
const letras = ["a", "b", "c", "d", "e"];
console.log(letras.lastIndexOf("a"));
console.log(letras.lastIndexOf("b"));
console.log(letras.lastIndexOf("z")); // retorna -1 pois não exite a letra z na lista
 
//Slice 
const testandoSlice = ["a", "b", "c", "d", "e", "f"];
const subArray = testandoSlice.slice(2, 4);
 
console.log(testandoSlice);
console.log(subArray);
 
const subArray2 = testandoSlice.slice(2, 4+1);
console.log(subArray2);
 
//buscando um array via slice numa posição inexistente
const subArray3 = testandoSlice.slice(10, 5);
console.log(subArray3);
 
//Includes (pocura um elemento dentro da array retornando true ou false)
const frutasDona = ["maçã", "banana", "laranja"];
const temMaca = frutasDona.includes("maçã");
const temMelancia = frutasDona.includes("melância");
 
console.log(temMaca);
console.log(temMelancia);
 
//includes á partir de uma posição
const letrasNovo = ["a", "b", "c", "d", "a"];
const temApos2 = letrasNovo.includes("a", 2);
console.log(temApos2);
 
//reverse
const testandoReverse = [1,2,3,4,5];
testandoReverse.reverse();
console.log(testandoReverse);
 
//spread
const testandoSpread = ["a", "b", "c", "d", "e"];
const novasLetras = [...testandoSpread].reverse();
 
console.log(testandoSpread);
console.log(novasLetras);
 
//uppercase
const fraseA = "Boas vindas!";
const upper = fraseA.toUpperCase();
 
console.log(upper);
 
//lowercase
const fraseB = "QUE LEGAL!";
const lower = fraseB.toLowerCase();
 
console.log(lower);
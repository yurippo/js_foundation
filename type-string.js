const texto1 = "Olá mundo!";

const texto2 = "Olá mundo!";

const senha = "senhaSuperSegura456!";

const stringDeNumeros = "34567";

const citacao = "Meu nome é ";

const meuNome = "Leonardo";

//concatenação

console.log(citacao + meuNome);

//teamplate string ou template literal

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


//const input = "Belo Horizonte";

//console.log(cidade === input); // false


const cidade1 = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade1 === inputMinusculo); // true


const senha1 = "minhaSenha123"
console.log(senha1.length) // 13 caracteres

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

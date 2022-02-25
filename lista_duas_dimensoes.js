console.log('Executando script.js');

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediaDosAlunos = [10, 7, 9, 6];

// let listaDeAlunos = [ ['João', 'Juliana', 'Caio', 'Ana'],[10, 7, 9, 6] ]

                           //0 [alunos]     //1 [10,7,9,6]
let listaDeNotasEAlunos = [alunos,mediaDosAlunos];


console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`);


const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"];
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"]);

console.log(arrayConcat);
console.log(arrayOriginal);

const arrayOriginal1 = [50, 60, 70]
const arrayConcat1 = arrayOriginal1.concat([80, [90, 100]])

console.log(arrayConcat1)
console.log(arrayOriginal1)


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

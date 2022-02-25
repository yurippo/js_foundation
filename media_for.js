console.log('Executando script.js');

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {

	//console.log(i, notas[i]);

	somaDasNotas = notas[i] + somaDasNotas;
}

let mediaDasNotas = somaDasNotas / notas.length

console.log(mediaDasNotas);

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

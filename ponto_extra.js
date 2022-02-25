console.log('Executando script.js');

const notas = [10,9,8,7,6];

const notasAtualizadas = notas.map(nota => nota == 10 ?
	nota: ++ nota );

console.log(notasAtualizadas)

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});


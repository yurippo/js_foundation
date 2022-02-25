console.log('Executando script.js');

const notas = [10,6, 8];

notas.push(7);

console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);





const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

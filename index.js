console.log('Executando script.js');

//medias 10, 6.5, 8, 7.5

//let nota1 = 10;

//let nota2 = 6.5;

//let nota3 = 8;

//let nota4 = 7.5;

const notas = [10, 6.5, 8, 7.5];

//let media = (nota1 + nota2 + nota3 + nota4) / 4;

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

console.log('Executando script.js');

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {

	const somaDasNotas = notasDaSala.reduce((acum, atual) =>

		atual + acum, 0);

	return somaDasNotas /notasDaSala.length
}

console.log(`M�dia da sala de Javascript ${mediaSala(salaJS)}`);

console.log(`M�dia da sala de Java ${mediaSala(salaJava)}`);

console.log(`M�dia da sala de Python ${mediaSala(salaPython)}`);

const notas = [10, 6.5, 8, 7];

const media = notas.reduce((acum, atual) => atual + acum, 0) /

	notas.length

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


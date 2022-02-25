console.log('Executando script.js');

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numeros.length; i++) {

	console.log(i, numeros[i]);
}


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

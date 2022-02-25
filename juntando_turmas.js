console.log('Executando script.js');

const salaDePython = ['Melissa', 'Helena', 'Rodrigo'];

const salaDeJavascript = ['Ju', 'Leo', 'Raquel'];

const salasUnificadas = salaDePython.concat(salaDeJavascript);

console.log(salasUnificadas);

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

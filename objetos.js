console.log('Executando script.js');

const listaCPFs = ['12365242625', '9242624265', '9352524652'];

//const cliente = ['nome', 'André', 'idade', 36];

const cliente = {

	nome: 'André',
	idade: 36,
	cpf: '12543652266',
	email:'andre@email.com'
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


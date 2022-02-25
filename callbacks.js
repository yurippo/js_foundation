console.log('Executando script.js');

const nomes = ['Ana', 'Ju', 'Paula'];

nomes.forEach(imprimeNomes);

function imprimeNomes(nome) {

	console.log(nome);

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


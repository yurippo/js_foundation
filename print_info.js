console.log('Executando script.js');


const cliente = {

	nome: 'Andr�',
	idade: 36,
	cpf: '12543652266',
	email: 'andre@email.com'
}

console.log(`Meu nome � ${cliente.nome} e tenho ${cliente.idade} anos.`);

console.log(cliente.cpf.substring(0, 3));








const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

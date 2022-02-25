console.log('Executando script.js');


const cliente = {

	nome: 'André',
	idade: 36,
	cpf: '12543652266',
	email: 'andre@email.com',
	fones: ["5591234598", "5521988743124"]
}


cliente.dependentes = {

	nome: "Sara",
	parentesco: "filha",
	dataNasc: "20/03/2011"

}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva"

console.log(cliente);


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

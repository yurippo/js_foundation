console.log('Executando script.js');


const cliente = {

	nome: 'André',
	idade: 36,
	cpf: '12543652266',
	email: 'andre@email.com',
	fones: ["5591234598", "5521988743124"],

	dependentes: [{

		nome: "Sara",
		parentesco: "filha",
		dataNasc: "20/03/2011"

	}]
}

cliente.dependentes.push({

	nome: "Samia Maria",
	parentesco: "filha",
	dataNasc: "04/01/2014"

})

console.log(cliente);


const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014");

console.log(filhaMaisNova[0].nome);

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

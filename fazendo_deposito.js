console.log('Executando script.js');


const cliente = {

	nome: 'Andr�',
	idade: 36,
	cpf: '12543652266',
	email: 'andre@email.com',
	fones: ["5591234598", "5521988743124"],

	dependentes: [{

		nome: "Sara",
		parentesco: "filha",
		dataNasc: "20/03/2011"

	},

	{
		nome: "Samia Maria",
		parentesco: "filha",
		dataNasc: "04/01/2014"

	}
	],
	saldo: 100,
	depositar: function (valor) {

		this.saldo += valor
    }
}

console.log(cliente.saldo);

cliente.depositar(30);

console.log(cliente.saldo);



const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

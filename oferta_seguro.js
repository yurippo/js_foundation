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

const propsClientes = Object.keys(cliente)

console.log(propsClientes);

function oferecerSeguro(obj) {

	const propsClientes = Object.keys(cliente);
	if (propsClientes.includes("dependentes")) {

		console.log(`oferta de seguro de vida para ${obj.nome}`);
    }

}

console.log(Object.values(cliente));


console.log(Object.values(cliente));



oferecerSeguro(cliente);

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});
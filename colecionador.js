console.log('Executando script.js');

const colecionador = {
	nome: "João do Gibi",
	idade: 41,
	tipocolecao: ["quadrinhos"],
	contato: "joao@email.com",
	adicionarTipo: function (propriedade, tipo) {
		this[propriedade].push(tipo)
	}

}

console.log(colecionador.nome);

console.log(colecionador["nome"]);


for (i = 0; i < 4; i++) {
	colecionador.adicionarTipo("tipocolecao", "HQ" + i)
}

console.log(colecionador);




const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

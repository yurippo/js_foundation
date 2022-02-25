console.log('Executando script.js');


const cliente = {

	nome: 'André',
	idade: 36,
	cpf: '12543652266',
	email: 'andre@email.com'
}

console.log(cliente);

cliente.fone = '9242525252'

console.log(cliente);

cliente.fone = '875254554'

console.log(cliente);

const objPersonagem = {
	nome: "Gandalf",
	classe: "mago",
	nivel: "20",
	aliado: {
		nome: "Saruman",
		classe: "mago"
	},
	status: "desaparecido"
}

delete objPersonagem.aliado

console.log(objPersonagem.aliado);

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

console.log(objPersonagem);

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true

const newObject = {
	nome: "Peter Parker",
	classe: "mago do bem",
	nivel: "2000",
	cpf: "83485256804",
	fone: "6047045889",
	status: "desaparecido",
	dataNascimento: "25/05/1989",
	carteiraIdentidade: "999362-1",
	email: "peterparker@email.com",
	cidade: "Cariacica",
	estado: "ES",
};

newObject.cpf = "11111111122"

console.log(newObject);



const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

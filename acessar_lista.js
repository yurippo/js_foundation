console.log('Executando script.js');


const cliente = {

	nome: 'André',
	idade: 36,
	cpf: '12543652266',
	email: 'andre@email.com'
}
               //0       //1
const chaves = ['nome', 'idade', 'cpf', 'email'];

//console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));

console.log(cliente['nome']);




const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

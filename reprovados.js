console.log('Executando script.js');

const nomes = ['Ana', 'Marcus', 'Maria', 'Mauro'];

const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((_,indice) => notas
[indice] < 5);

console.log(`reprovados: ${reprovados}`);







const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});


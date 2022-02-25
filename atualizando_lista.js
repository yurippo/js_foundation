console.log('Executando script.js');

const listaDeChamada = ['João','Ana', 'Caio','Lara','Marjorie','Leo'];


console.log("Tamanho do array: ", listaDeChamada.length);


//listaDeChamada.splice(1, 2, 'Rodrigo');

listaDeChamada.splice(2,0,'Rodrigo');

console.log(`Lista de chamada: ${listaDeChamada}`);


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

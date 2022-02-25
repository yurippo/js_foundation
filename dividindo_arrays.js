console.log('Executando script.js');

const nomes = ['João', 'Juliana',
	'Ana', 'Caio', 'Lara', 'Marjorie',
	'Guilherme', 'Aline', 'Fabiana', 'Andre',
	'Carlos', 'Paulo', 'Bia',
	'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];


console.log("Tamanho do array: ", nomes.length);


                         //0  10       
const sala1 = nomes.slice(0, nomes.length / 2);

                         //10 
const sala2 = nomes.slice(nomes.length / 2);

console.log(`Alunos da sala 1: ${sala1}`);

console.log(`Alunos da sala 2: ${sala2}`);


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

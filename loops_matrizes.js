console.log('Executando script.js');

const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
	for (let j = 0; j < notasGerais[i].length; j++) {
		media += notasGerais[i][j] / notasGerais[i].length;
	}
}

media = media / notasGerais.length

console.log(media)


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

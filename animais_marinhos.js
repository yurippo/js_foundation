console.log('Executando script.js');

animaisDoAquario = ['baleia', 'lula', 'golfinho', 'golfinho'];

animaisDoAquario.splice(1, 0, 'peixe');
animaisDoAquario.splice(3, 2, 'lambari');

console.log(animaisDoAquario);


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

console.log('Hello world! Executando script.js');

const nome = "Ju";

const idade = 2021 - 1981;

const cidadeDeNascimento = "São Paulo";

//const apresentacao = "meu nome e " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;


const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;


console.log(apresentacao);

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

console.log('Executando script.js');

//var

//var altura = 5;

//var comprimento = 7;

//area = altura * comprimento;

//console.log(area);
//var area;

//let forma = 'retangulo';

//let altura = 5;

//let comprimento = 7;

//let area;


//if (forma == 'retângulo') {

	//area = altura * comprimento;
//} else {
//	area = (altura * comprimento) / 2;
//}

//console.log(area);

const forma = 'triângulo';

const altura = 5;

const comprimento = 7;

let area;


if (forma == 'quadrado') {

	 area = altura * comprimento;

} else {

	area = (altura * comprimento) / 2;
}




console.log(area);








const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

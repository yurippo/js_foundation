console.log('Executando script.js');

const alunos = ['Jo�o', 'Juliana', 'Caio', 'Ana'];

const mediaDosAlunos = [10, 7, 9, 6];

// let listaDeAlunos = [ ['Jo�o', 'Juliana', 'Caio', 'Ana'],[10, 7, 9, 6] ]

//0 [alunos]     //1 [10,7,9,6]


// includes retorna um booleano verdadeiro ou falso

// indexOf n�o retorna um booleano ele retorna um n�mero referente ao n�mero do �ndice

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {

	if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {

		let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);

                                //[0] //[3]
		return listaDeNotasEAlunos[0][indice] + ' ,sua m�dia � '
			+ listaDeNotasEAlunos[1][indice]

	} else {

		return 'Aluno n�o est� cadastrado'
    }
}


console.log(exibeNomeNota('Ana'));

console.log(exibeNomeNota('Juliana'));

console.log(exibeNomeNota('Nemo'));




const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

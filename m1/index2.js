// //Criar um programa que calcula a media
// //das notas entre os alunos e envia
// //mensagem do calculo da media.


// //Objetos
// const aluno01 = {
//     nome: "Mayk",
//     nota: 9.8
// }
 
// const aluno02 = {
//     nome: "Diego",
//     nota: 10
// },

// const aluno03 = {
//     nome: "Fulano",
//     nota:2
// }



// const media = (aluno01.nota + aluno02.nota + aluno03.nota)/3

// //Se a media for maior que 5, prabenizar a turma
// if (media>5) {
//   console.log(`A media foi de ${media}. Congrats, tchurma!`)
// } else{
//   console.log(`A media eh menos que 5. Voces precisam estudar mais, pessoal!`)
// }


// // Vetores

// const alunos= [
//   {
//     nome: "Mayk",
//     nota: 9.8
//   },
//   {
//     nome: "Diego",
//     nota: 10
//   },
//   {
//     nome: "Fulano",
//     nota:2
//   }
// ]

// const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3

// //Se a media for maior que 5, prabenizar a turma
// if (media>5) {
//   console.log(`A media foi de ${media}. Congrats, tchurma!`)
// } else{
//   console.log(`A media eh menos que 5. Voces precisam estudar mais, pessoal!`)
// }

//
// ===== FUNCOES =====
//Criar um programa que calcula a media
//das turmas de alunos e envia
//mensagem do calculo da media.

// const alunosDaTurmaA= [
//   {
//     nome: "Mayk",
//     nota: 1.8
//   },
//   {
//     nome: "Diego",
//     nota: 10
//   },
//   {
//     nome: "Fulano",
//     nota:2
//   }
// ]

// const alunosDaTurmaB= [
//   {
//     nome: "Cleiton",
//     nota: 10
//   },
//   {
//     nome: "Robson",
//     nota: 10
//   },
//   {
//     nome: "Sicrano",
//     nota:0
//   }
// ]

// function calculaMedia(alunos) {
//   return (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
// }

// const media1 = calculaMedia(alunosDaTurmaA)
// const media2 = calculaMedia(alunosDaTurmaB)

// //Se a media for maior que 5, parabenizar a turma
// function enviaMensagem(media, turma) {
//   if (media>5) {
//     console.log(`A media da turma ${turma} foi de ${media}. Congrats, tchurma!`)
//   } else{
//     console.log(`A media da turma ${turma} eh menos que 5. Voces precisam estudar mais, pessoal!`)
//   }

// }
// enviaMensagem(media1, 'turmaA') //'turmaA' para identificar a turma
// enviaMensagem(media2, 'turmaB')


// ===== ESTRUTURA DE REPETICAO  =====
//Criar um programa que calcula a media
//das turmas de alunos e envia
//mensagem do calculo da media.


const alunosDaTurmaA= [
  {
    nome: "Mayk",
    nota: 1.8
  },
  {
    nome: "Diego",
    nota: 10
  },
  {
    nome: "Fulano",
    nota:2
  },
  {
    nome:"Mais um aluno",
    nota:10
  }
]

const alunosDaTurmaB= [
  {
    nome: "Cleiton",
    nota: 10
  },
  {
    nome: "Robson",
    nota: 10
  },
  {
    nome: "Sicrano",
    nota:0
  },
  {
    nome:"Novo aluno",
    nota: 5
  }
]

function calculaMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++){
    soma = soma + alunos[i].nota
  }
  const media = soma / alunos.length
  return media
}


const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

//Se a media for maior que 5, parabenizar a turma
function enviaMensagem(media, turma) {
  if (media>5) {
    console.log(`A media da turma ${turma} foi de ${media}. Congrats, tchurma!`)
  } else{
    console.log(`A media da turma ${turma} eh menos que 5. Voces precisam estudar mais, pessoal!`)
  }

}
enviaMensagem(media1, 'turmaA') //'turmaA' para identificar a turma
enviaMensagem(media2, 'turmaB')

//Marcar aluno como reprovado se anota for menor que 5
//e, tambem, enviar uma mensagem

function marcarComoReprovado (aluno){
    aluno.reprovado = false;  //por enquanto, assumo que ninguem esta reprovado
    if (aluno.nota < 5) {
      aluno.reprovado = true
    }
  }

  function enviarMensagemReprovado (aluno) {
  if (aluno.reprovado) {      //nao precisa colocar aluno.reprovado=true pq o if ja eh um true
    console.log(`O Aluno ${aluno.nome} esta reprovado!`)
  } 
}

function alunoReprovado (alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno)
    enviarMensagemReprovado(aluno)
  }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)



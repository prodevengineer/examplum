//Criar um programa que calcula a media 
//das turmas de alunos e envia
//mensagem do calculo da media
//Se a media for maior que 5, parabenizar a turma


///mesma coisa do index.js, mas usando o FOR..OF na funcao
const alunosDaTurmaA=[
  {
    nome: 'Peter',
    nota: 9
  },
  {
    nome:'Riba',
    nota:10
  },
  {
    nome:'Lara',
    nota:2
  }
]

const alunosDaTurmaB=[
  {
    nome: 'Jillian',
    nota: 10
  },
  {
    nome:'Ryan',
    nota:10
  },
  {
    nome:'Vince',
    nota:0 
  },
  {
    nome:'Novo aluno',
    nota:5
  }
]

function calculaMedia(alunos){
  soma=0
  for (let aluno of alunos){
    soma+= aluno.nota
  }
  const media= soma/alunos.length
  return media
}
const media1=calculaMedia(alunosDaTurmaA)
const media2=calculaMedia(alunosDaTurmaB)

function enviaMensagem(media,turma){
  if (media>=5){
    console.log(`A media da turma ${turma} foi de ${media}.Parabens, pupilinhox!`)
  } else {
    console.log(`A media da turma ${turma} foi menor que 5. Vamo estudar, meu povo`)
  }
}
enviaMensagem(media1, 'turmaA')
enviaMensagem(media2,'turmaB')

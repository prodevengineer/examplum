/*
=======================================
OPERADORES DE COMPARACAO
>     Maior
<     Menor
> =   Maior ou igual a
< =   Menor our igual a
==    Igual a
===   Igual e do mesmo tipo
!=    Diferente de
!==   Diferente, inclusive do tipo

======================================

console.log(5 > 4) //true
console.log(5 < 4) //false
console.log(5 >= 4) //true
console.log(4 <= 4) //true


console.log(4 == "4") // olha so o valor: TRUE
console.log(4 === "4") // olha o valor e o tipo: FALSE, pois um eh do tipo string e o outro do tipo number
console.log(4 != "5") // olha so o valor: TRUE, pois 4 eh diferente de 5
console.log(4 !== "5") // olha o valor e o tipo: TRUE, diferente em tipo e em valor */

/*

================================
OPERADORES LOGICOS
&&      "E"       As DUAS condicoes devem ser verdadeiras para que a condicao final seja verdadeira
||      "OU"      UMA das condicoes deve ser verdadeira para que a condicao final seja verdadeira
!       "NAO"     Nega uma condicao

===============================*/
/*
console.log(5 == 5 && 6 == 6) // TRUE
console.log(5 == 5 && 6 != 6) // FALSE

console.log(5 == 5 || 6 == 6) // TRUE
console.log(5 == 5 || 6 != 6) // TRUE, satisfez pelo menos UMA das 2 condicoes

console.log(!(5 > 6)) // TRUE: 5>6 eh falso, mas !(false)=TRUE
console.log(!(5 < 6))// FALSE: 5<6 eh true, mas !(true)=FALSE
*/




/*
//DESAFIO 01
=== FEITO PASSO-A-PASSO, BEM FEINHO EM ESTRUTURA ===

//Verificar se a pessoa eh maior ou igual a 18 anos
const idade = 17
console.log(idade >= 18)
//se sim, deixar entrar, se nao, bloquear a entrada
if (idade >= 18){
  console.log('Entrada liberada')
} else {
  console.log('Entrada bloqueada')
}
// se a pessoa tiver 17 anos
if (idade === 17){
  console.log('Volte quando fizer 18 anos')

}
//avisar para voltar quando fizer 18 anos 
*/



//DESAFIO 01
//Verificar se a pessoa eh maior ou igual a 18 anos
//se sim, deixar entrar, se nao, bloquear a entrada
// se a pessoa tiver 17 anos
//avisar para voltar quando fizer 18 anos 

const idade = 17

if (!(idade >= 18) || idade === 17){   
  // idade=16, &&
  //!(false)=true, entao o IF sera falso, porque && exige que as duas condicoes sejam verdadeiras
  //neste caso, ira direto para o else,
  //mensagem: Entrada liberada (para um menor de 16 anos!!)
  
  //idade=16, ||
  //!(false)=true, 
  //o IF satisfez pelo menos UMA das duas condicoes
  //mensagem: Entrada bloqueada 

  //idade=17, &&
  //!(17<18: false)=true. Entao o IF sera verdadeiro, pois as duas condicoes sao verdadeiras e foram satisfeitas
  //Mensagem: Entrada bloqueada
  
  //idade=17, ||
  //!(17<18: false)=true. Entao o IF sera verdadeiro, pois as duas condicoes sao verdadeiras e foram satisfeitas (precisa de apenas UMA)
  //Mensagem: Entrada bloqueada 
  
  //idade=18, ||
  //!(18=18 =true)= false. Entao o IF sera nao satisfara nenhuma das condicoes
  //vai direto pro else
  //Mensagem: Entrada liberada

  console.log('Entrada bloqueada')
} else {
  console.log('Entrada liberada')
}

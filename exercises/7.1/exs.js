/*Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
Modifique a estrutura da função para que ela seja uma arrow function .
Modifique as concatenações para template literals .
Copie o código abaixo.*/

function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  // resolucao ex 1

  const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

  // 2 Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
  // Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.

  console.log(oddsAndEvens);

  // ex 2 resolucao

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const retornaCrescente = (numeros) => {
    numeros.sort((a, b) => a - b)
    return `Os números ${numeros} se encontram ordenados de forma crescente!`
  }
 
  console.log(retornaCrescente(oddsAndEvens));

  //Parte 2

  //ex1
  const numero = 4;

  const retornaFatorial = numero => {
      let fatorial = 0;
    for (let index = numero - 1; index > 0; index -= 1) {
        fatorial += numero * index
    }
    return fatorial
  }

  console.log(retornaFatorial(numero))

  //ex2

  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

  const findsLongestWord = word => {
    let individualWord = word.split(' ');
    let maiorPalavra = individualWord[0];

    for (let index = 1; index < individualWord.length; index += 1) {
        if (individualWord[index].length > maiorPalavra.length ) {
            maiorPalavra = individualWord[index]
        }
    }
    console.log(maiorPalavra)
  }

  findsLongestWord("Antônio foi no banheiro e não sabemos o que aconteceu");

  //ex3 

  let clickCount = 0;

  botao.addEventListener('click', (count) => {
      let clickCount
  })
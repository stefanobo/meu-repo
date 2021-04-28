let player = {
name: 'Marta',
lastname: 'Silva',
age: 34,
medals: {golden: 2, silver: 3},
}
let bestintheworld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player.name + ' ' + player.lastname + ' tem ' + player.age + ' anos de idade.');

console.log('A jogadora ' + player.name + ' ' + player.lastname + ' foi eleita a melhor do mundo ' + bestintheworld.length + ' vezes.')

console.log('A jogadora ' + player.name + ' ' + player.lastname + ' recebeu ' + player.medals.golden + ' medelhas de ouro e ' + player.medals.silver + ' medalhas de prata.')

// ex 1 for in

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
  };

  for (let key in names) {
      console.log('Olá ' + names[key])
  }

  // ex 2 for in

  let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let key in carro) {
      console.log(key, carro[key])
  }

  // EXS Parte 1 - Objetos e For/in

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
//ex1
  console.log('Bem-vinda, ' + info.personagem);
//ex2
  info.recorrente = 'Sim';

  console.log(info.recorrente);
//ex3
  for (let key in info) {
        console.log(key);
  }
//ex4
  for (let key in info) {
    console.log(info[key]);
}
//ex5

let info = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell's Four Color Comics #178',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };


  // Parte II - Funções

  //ex1


  function verificaPalindrome (palavra) {
      let palavraTestada = palavra.split("").reverse().join("");
      if (palavraTestada === palavra) {
          console.log(true);
      } else {
          console.log(false);
      }
  }

  let palavraAVerificar = 'bicicleta';

  verificaPalindrome (palavraAVerificar);

  //ex 2

  function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

  //ex 3

  let arrayTeste = [2, 4, 6, 7, 10, 0, -3];

  function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
    return indiceMenor;
  }
  
  console.log(indiceDoMenor(arrayTeste))

  //ex 4

  let arrayDeTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

  function maiorQuantidadeCaracteres (palavra) {
      let indiceMaior = 0;
      for (let key in palavra) {
      if (palavra[indiceMaior].length < palavra[key].length) {
        indiceMaior = key;
      }
     }
     return palavra[indiceMaior];
  }

  console.log(maiorQuantidadeCaracteres(arrayDeTeste));

//ex 5

let arrayTeste = [2, 3, 2, 5, 8, 2, 3];

function moda (arr) {
    return ((arr.sort((a, b) =>
    (arr.filter(v => v === a).length) - (arr.filter(v => v === b).length))
  ).pop())
  }

  console.log(moda(arrayTeste));

  //ex 6

  let n = 5;

  function somaTodos (numero) {
      let somaTudo = 0;
      let somaValor;
    for (let index = 1; index <= numero; index += 1) {
        somaValor = index;
        somaTudo += somaValor;
    }
    return somaTudo;
  }

  console.log(somaTodos(n));

  //ex 7

  let strWord = 'trybe';
  let strEnd = 'be';

  function verificaFimPalavra (palavra, final) {
    let letrasFinal = final.split('');
    let letrasPalavra = palavra.split('');
    let letrasFinalNumero = final.length;
    let contagem = true;
    for (let index = 0; index < letrasFinal.length; index += 1) {
        if (palavra[palavra.length - final.length + index] != letrasFinal[index]) {
            contagem = false;
        }
    } return contagem;
    }

    console.log(verificaFimPalavra(strWord, strEnd))
    console.log(verificaFimPalavra('joaofernando', 'fernan'));

   // outra resolucao function verificaFimPalavra (palavra, final) {
    //    let letrasFinal = final.split('');
   //     let letrasPalavra = palavra.split('');
   //     let letrasFinalNumero = final.length;
    //    let contagem = 0;
  //      console.log(letrasFinal);
    //    for (let index = palavra.length - 1; index >= palavra.length - final.length; index -= 1) {
     //       for (let index2 = final.length - 1; index2 >= 0; index2 -= 1) {
    //            if (letrasPalavra[index] === letrasFinal[index2]) {
     //               contagem += 1;
     //           }
     //       }
     //       console.log(contagem);
     //       if (contagem == letrasFinalNumero) {
     //           return true
     //       } else {return false}
     //   }})
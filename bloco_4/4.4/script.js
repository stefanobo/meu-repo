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

  let arrayTeste = [2, 3, 6, 7, 10, 1];

  function retornaMaiorValor (arrayAlvo) {
      let maiorNumero;
      let indiceMaior;
      for (let index = 0; index < arrayAlvo.length; index += 1) {
        if (arrayAlvo[index] > arrayAlvo[index + 1]) {
            maiorNumero = arrayAlvo[index]
        }
      }
      for (let index2 = 0; index2 < arrayAlvo.length; index2 += 1) {
          if (maiorNumero === arrayAlvo[index2]) {
            indiceMaior = index2
          }
      }
      return indiceMaior;
  };

  console.log(retornaMaiorValor(arrayTeste))
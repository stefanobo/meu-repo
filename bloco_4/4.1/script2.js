let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1] ;

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio') ;

console.log(indexOfPortfolio);

menu.push('Contato');

console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index])
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let listaNomes of names) {
    console.log(listaNomes);
}

// EXS PRATICOS

//ex 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let listaNumeros of numbers) {
    console.log(listaNumeros);
}

//ex 2
let results = 0;

for (let index = 0; index < numbers.length; index += 1) {
    results += numbers[index];
}
// ex 3

let mediaAritmetica = results / numbers.length;
console.log(results);
console.log(mediaAritmetica);

//ex 4

if (mediaAritmetica > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

//ex 5

let numeroMaior = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > numeroMaior) {
        numeroMaior = numbers[index];
    }
}

console.log(numeroMaior)

//ex 6

quantosImpar = 0;

for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    if (numbers[index1] % 2 === 0) {
        quantosImpar += 1;
    }
}
if (quantosImpar === 0) {
    console.log('nenhum valor encontrado')
} else{
    console.log(quantosImpar);
}

//ex 7

let menorValor = numbers[0];

for (indexMenor = 1; indexMenor < numbers.length; indexMenor += 1) {
    if (numbers[indexMenor] < menorValor) {
        menorValor = numbers[indexMenor];
    }
}
console.log(menorValor)

//ex 8

let arrayDe1a25 = [];

for (let contador = 1; contador < 26; contador += 1) {
    arrayDe1a25.push(contador);
}
console.log(arrayDe1a25)

//ex 9

for (let divisor = 0; divisor < arrayDe1a25.length; divisor += 1) {
    let numeroDividido = arrayDe1a25[divisor] / 2;
    console.log(numeroDividido);
}

// bonus

for (let firstIndex = 1; firstIndex < numbers.length; firstIndex += 1) {
    for (let secondIndex = 0; secondIndex < firstIndex; secondIndex += 1) {
      if (numbers[firstIndex] < numbers[secondIndex]) {
        let position = numbers[firstIndex];
        numbers[firstIndex] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers)

  //b2

  for (let firstIndex = 1; firstIndex < numbers.length; firstIndex += 1) {
    for (let secondIndex = 0; secondIndex < firstIndex; secondIndex += 1) {
      if (numbers[firstIndex] > numbers[secondIndex]) {
        let position = numbers[firstIndex];
        numbers[firstIndex] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers)

  //b3

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


  let novaArray = [];

  for (let novoIndex = 0; novoIndex < numbers.length; novoIndex += 1) {
      if (novoIndex + 1 < numbers.length) {
         novaArray.push(numbers[novoIndex] * numbers[novoIndex + 1]);
      } else {
          novaArray.push(numbers[novoIndex] * 2);
      }
  }

 // for (let multiplica = 0; multiplica < numbers.length; multiplica += 1) {
 //   for (let multiplica2 = 1; multiplica2 < multiplica.length; multiplica2 += 1) {
 //       let novoValor = numbers[multiplica] * numbers[multiplica2];
 //       novaArray.push(novoValor);
 //   }

  } console.log(novaArray);
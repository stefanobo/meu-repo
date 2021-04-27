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
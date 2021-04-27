let fruits = [3, 4, 10, 1, 12];

let totalSomado = 0;

for (let contador = 0; contador < fruits.length; contador += 1) {
   totalSomado += fruits[contador];
}

if (totalSomado > 15) {
       console.log(totalSomado)
} else {
       console.log('valor menor que 16')
   }

//ex 1

let n = 4;
let inputLine = ' ';

for (indexInput = 0; indexInput < n; indexInput += 1) {
    inputLine = inputLine + '*';
}

for (let indexQuadrado = 0; indexQuadrado < n; indexQuadrado += 1) {
    console.log(inputLine);
}

// ex 2

let n = 8;
let inputLine = ' ';

for (indexInput = 0; indexInput < n; indexInput += 1) {
    for (let indexTriangulo = n - 1; indexTriangulo >= n - 1; indexTriangulo -= 1) {
        inputLine = inputLine + '*';
        console.log(inputLine);
    }
    
}

// ex 3

let n = 10;
let inputLine = ' ';
let inputLine2 = '*'
let repeatedLine = '';
let repeatedLine2 = '';

for (let index = 0; index < n; index += 1) {
    repeatedLine += inputLine;
}

for (let indexTri = 1; indexTri <= n; indexTri += 1) {
    repeatedLine = repeatedLine.substring(1);
    repeatedLine2 += inputLine2;
    console.log(repeatedLine + repeatedLine2);
}

let asterisco = "*";
let asterisco2 = "**";

console.log(asterisco2 - asterisco);
console.log(asterisco + asterisco2)
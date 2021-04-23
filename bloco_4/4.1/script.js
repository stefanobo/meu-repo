let x = 3;
let y = 4;

soma = x + y;
console.log(soma)

let subtracao = x - y;

let multiplicacao = x * y;

let divisao = x / y;

let modulo = x % y;

console.log(subtracao);
console.log(multiplicacao);
console.log(modulo);
console.log(divisao);

let a = 20;
let b = 22;

if (a > b) {
    console.log(a);
} else {
    console.log(b)
}

let c = 35;
let d = 9;
let e = 30;

if (c > d) {
    if (c > e) {
        console.log('c é o maior')
    } else {
        console.log('e é o maior')
    }
} else {
    if (d > e) {
        console.log('d é o maior')
    } else {
        console.log('e é o maior')
    }
}

let v = -3;

if (v > 0) {
    console.log("positive");
} else if (v < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

let lado1 = 10;
let lado2 = 10;
let lado3 = 160;

if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log('Erro: um dos angulos eh invalido')
} else if (lado1 + lado2 + lado3 === 180) {
    console.log(true);
} else {
    console.log(false);
}

let nomeDaPeca = "Bispo";
let nomeEmLower = nomeDaPeca.toLowerCase();

switch (nomeEmLower) {
    case 'bispo':
        console.log('anda na diagonal');
        break;
    case 'rei':
        console.log('anda todos os lados');
        break;
    case 'rainha':
        console.log('anda de todas as formas');
        break;
    case 'torre':
        console.log('anda demais fi');
        break;
    default:
        console.log('nome invalido');
}

let notaDada = 70;

if (notaDada < 0 || notaDada > 100) {
    console.log('erro')
} else if (notaDada >= 90) {
    console.log('nota A')
} else if (notaDada >= 80) {
    console.log('nota B');
}
    else if (notaDada >= 70) {
    console.log('nota C');
}
    else if (notaDada >= 60) {
    console.log('nota D'); } // E POR AI VAI

    let num1 = 67;
    let num2 = 3;
    let num3 = 92;
    let somados3 = num1 + num2 + num3;

    if (somados3 % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }

    let num4 = 3;
    let num5 = 3;
    let num6 = 3;
    let somados3_2 = num4 + num5 + num6;

    if (somados3_2 % 2 != 0) {
        console.log(true);
    } else {
        console.log(false);
    }

    let valorCusto = 10;
    let valorVenda = 20;

    if (valorCusto < 0 || valorVenda < 0) {
        console.log('erro')
    } else {
        let impostoSobreOCusto = valorCusto * 0.2;
        let valorCustoTotal = valorCusto + impostoSobreOCusto;
        let lucro = (valorVenda - valorCustoTotal) * 1000;
        console.log(lucro)
    }

    let salarioBruto = 3000;
    let salarioMenosINSS;
    let impostoDeRenda;

    if (salarioBruto <= 1556.94) {
        let salarioMenosINSS = salarioBruto * 0.92;
    } else if (salarioBruto <= 2594.92) {
        let salarioMenosINSS = salarioBruto * 0.91;
    } else if (salarioBruto <= 5189.82) {
        let salarioMenosINSS = salarioBruto * 0.89;
    } else {
        let salarioMenosINSS = salarioBruto - 570.88;
    }

    if (salarioMenosINSS >= 1903.98) {
        console.log('isento de imposto de renda')
    } else if (salarioMenosINSS >= 2826.65) {
        let impostoDeRenda = (salarioMenosINSS * 0.075) - 142.8;
        let salarioLiquido = salarioMenosINSS - impostoDeRenda;
        console.log(salarioLiquido);
    } else if (salarioMenosINSS >= 3751.05) {
        let impostoDeRenda = (salarioMenosINSS * 0.15) - 354.8;
        let salarioLiquido = salarioMenosINSS - impostoDeRenda;
        console.log(salarioLiquido);
    } else if (salarioMenosINSS >= 4664.68) {
        let impostoDeRenda = (salarioMenosINSS * 0.225) - 636.13;
        let salarioLiquido = salarioMenosINSS - impostoDeRenda;
        console.log(salarioLiquido);
    } else if (salarioMenosINSS >= 2826.65) {
        let impostoDeRenda = (salarioMenosINSS * 0.275) - 869.36;
        let salarioLiquido = salarioMenosINSS - impostoDeRenda;
        console.log(salarioLiquido);
    }
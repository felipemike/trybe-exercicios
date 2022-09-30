
//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.


let fatorial = 10;
let resultado = fatorial;
for (var index = 1; index < fatorial; index+=1) {
    resultado *= index;
}   
console.log(`O fatorial de ${fatorial} é = ${resultado}`);

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';

let novaString = '';

for(let index = word.length -1; index >= 0; index -=1){
    novaString += word[index];
}
console.log(` ${word} =  ${novaString}`)

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let menorPalavra = "";
let maiorPalavra = "";

for (menor of array) {
  if (menor.length >! menorPalavra.length) {
    menorPalavra = menor;
  }
}
for (maior of array) {
    if (maior.length > maiorPalavra.length) {
      maiorPalavra = maior;
    }
}
console.log(`A maior palavra é ${maiorPalavra} e a menor é ${menorPalavra}`)

//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(`Os numeros primos entre 2 e 50 são ${biggestPrimeNumber}`)
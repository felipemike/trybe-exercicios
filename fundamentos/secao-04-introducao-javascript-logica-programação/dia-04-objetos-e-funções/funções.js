
//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(word) {
  for( let index in word) {
    if(word[index] == word[(word.length - 1)]) {
      return true;
    }
  }

  return false;
}
console.log(verificaPalindrome('arara'))

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorNumero(numeros){

let indiceMaior = 0

for(let index in numeros){
  if(indiceMaior < numeros[index]){
    indiceMaior = index;
  }
}

return indiceMaior;

}
console.log(maiorNumero([2, 3, 6, 7, 10, 1]));

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorNumero(numero){

let indiceMenor = 0

for(let key in numero){
  if(indiceMenor >= numero[key]){
    indiceMenor = key
  }
}
return indiceMenor
}

console.log(menorNumero([2, 4, 6, 7, 10, 0, -3])); //6

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorPalavra (palavras){

let maiorPalavra = palavras[0]

for (let index in palavras){
  if (maiorPalavra.length < palavras[index].length){
    maiorPalavra = palavras[index]
  }
}
return maiorPalavra;


}
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;

  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }

  return numeros[indexNumeroRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2
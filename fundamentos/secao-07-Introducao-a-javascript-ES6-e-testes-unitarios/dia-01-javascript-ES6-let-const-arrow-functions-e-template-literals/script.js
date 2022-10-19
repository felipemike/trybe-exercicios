const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = "Não devo ser utilizada fora do meu escopo (else)";
    console.log(elseScope);
  }
};

testingScope(true);

// Crie uma função que retorne um array em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = (array) => {
  for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  return array;
};
console.log(sortOddsAndEvens(oddsAndEvens));

// Outro metodo 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7; 
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;
    return oddsAndEvens;
  };
  const sortedArray = sortOddsAndEvens();
  console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // Utilizando template literals para exibir a mensagem desejada


//  Bônus array.sort()

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);

// apenas em uma linha

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

// Crie uma função que receba um número e retorne seu fatorial.

const fatorial = (number) =>{

let valor = 1

for(let index = 2; index <= number; index += 1){
  valor *= number[index]
}

return valor


}

// apenas em uma linha

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));
//Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 1; index < numbers.length; index += 1){
    for(let buble = 0; buble < index; buble += 1){
        if(numbers[index] < numbers[buble]){
            let position = numbers[index];
            numbers[index] = numbers[buble];
            numbers[buble] = position;
        }

    }
}
console.log(numbers)
function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


function* generateNumbers(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const numbers = generateNumbers();
for (let i=0; i<4; i++){
    console.log(numbers.next().value);
}
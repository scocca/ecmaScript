let numbers = [];

function fill(){for (let i =0; i<51; i++){
    numbers.push(i);}}

fill();
console.log(numbers.includes(51));

const list = ['oscar', 'david', 'ana'];
console.log(list.includes('Ana'));
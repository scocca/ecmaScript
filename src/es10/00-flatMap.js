const array = [1,2,3,4,4,5, [5,6,7,8,89,[1,2,3,45,5]]]

//console.log(array.flat(1));

const array2 =[1,2,3,4,4,5];
console.log(array2.flatMap(v=>[v,v *2]))
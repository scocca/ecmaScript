var lastName ='David';
lastName = 'Oscar'
console.log(lastName);

let fruit ='Apple';
fruit='kiwi';
console.log(fruit);

const animal ='Cat';
console.log('Cat');
animal ='horde';

const fruits = ( )=>{
    if(true){
        var fruit1='Apple'; //function scope
        var fruit2='Kiwi'; //function scope
        const fruit3='banana' //function scope
    }
    console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
}

fruits();
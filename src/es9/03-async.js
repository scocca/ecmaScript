async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(3);
    yield await Promise.resolve(4);
}

const other = anotherGenerator();
other.next().then(response=>console.log(response.value));
other.next().then(response=>console.log(response.value));
other.next().then(response=>console.log(response.value));
console.log('hello')


async function arrayOfNames(array){
    for await (let value of array){
        console.log(value);
    }
}

const names = ['OScar', 'David','Ana'];
arrayOfNames(names);
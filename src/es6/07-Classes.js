//declarando una clase

class User{
    //metodos
    greeting(){
        return 'Hello';
    }
    //constructor
}


const newUser = new User();
console.log(newUser.greeting());

const bebeloper = new User();
console.log(bebeloper.constructor());

class User{
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const david = new User();
console.log(david.constructor)

//.this hace referencia al elemento padre que lo contiene

class User{
    constructor(name){
        this.name =name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new User('Ana');
console.log(ana.greeting())

//setters & getters

class User{
    //metodo constructor
    constructor(name, age){
        this.name =name;
        this.age =age;
    }
    //metodos
    speak(){
        return'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age =n;
    }
}

const developer = new User ('Geralt', 15);
console.log(developer.uAge);
console.log(developer.uage = 20);



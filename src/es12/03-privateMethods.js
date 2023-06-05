class User{
    //metodo constructor
    constructor(name, age){
        this.name =name;
        this.age =age;
    }
    //metodos
    #speak(){
        return'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age =n;
    }


}

const developer = new User ('Geralt', 15);
console.log(developer.name);
console.log(developer.uAge = 20);



function newUser(name, age, country){
    var name = name || 'santiago';
    var age = age || '29';
    var country = country || 'Scotland';
    console.log(name, age, country);
}
newUser();

newUser('michel', 50,'Ireland');

//ES6

function newAdmin(name ='Rodrigo', age =32, country='chile'){
    console.log(name, age, country)
}

newAdmin();
newAdmin('Rafael', 23, 'Spain');
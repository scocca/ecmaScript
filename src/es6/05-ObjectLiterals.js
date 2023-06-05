//enhaced object literals

function newUser(user, age, country, youId ){
    return{
        user,
        age,
        country,
        youId: 'youId',
    }
}

console.log(newUser('user', 35, 'Chile'));
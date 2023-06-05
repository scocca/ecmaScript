const user = {username: 'scocca', age:20, country:'co'}

const {username, ...values}=user;
console.log(username);
console.log(values);
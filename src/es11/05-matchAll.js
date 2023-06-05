const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, kiwi, Orange, Apple';
for(const match of fruit.match(regex)){
    console.log(match);
}

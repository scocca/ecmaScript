const regex = /(\d{4})-(\d{2})-(\d{2})/;

const matchers = regex.exec('2000-02-02');
console.table(matchers);
const friends =['tom', 'jerry', 'bulldog', 'cat', 'mouse'];

const shift1 = friends.shift();
const shift2 = friends.shift();
const shift3 = friends.shift();

console.log(friends)
console.log(shift1, shift2, shift3)
friends.unshift('butch')
const fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log('Fruits with more than 5 letters:');
console.log(longFruits);
// Output: [ 'banana', 'orange' ]

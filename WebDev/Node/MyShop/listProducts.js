const faker = require('faker');
const commerce = faker.commerce;
for(let i=0; i<10; i++) {
  console.log(commerce.productName() + ' - $' + commerce.price());
}

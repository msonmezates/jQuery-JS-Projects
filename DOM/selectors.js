let tag = document.getElementById('first');
console.log(tag);

tag = document.getElementsByClassName('special');
console.log(tag[0]);

tag = document.getElementsByTagName('p');
console.log(tag[0]);

tag = document.querySelector('#first');
console.log(tag);

tag = document.querySelector('.special');
console.log(tag);

tag = document.querySelectorAll('.special')
console.log(tag[0]);

tag = document.querySelector('p');
console.log(tag);

tag = document.querySelectorAll('p');
console.log(tag[0]);

tag = document.querySelector('h1+p');
console.log(tag);

tag = document.querySelector('p:nth-of-type(1)');
console.log(tag);

tag = document.querySelector('p:first-of-type');
console.log(tag);








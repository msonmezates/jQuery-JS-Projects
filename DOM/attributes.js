let image1 = document.getElementsByTagName('img')[0];
console.log(image1);

console.log(image1.getAttribute('src'));
console.log(image1.setAttribute("src","http://angrytorro.com/fs/i/2013/05/19/3a489d322613d30c5286d8196597a0.jpg"));

let a = document.querySelector('a');
console.log(a);

a.setAttribute('href','http://www.corgis.com');
console.log(a);

a.textContent = 'LINK TO CORGIS!';
console.log(a);



let lis = document.querySelectorAll('li');

for(let li of lis) {
  li.addEventListener('mouseover',()=>{
    li.classList.add('selected');
  });

  li.addEventListener('mouseout',()=>{
    li.classList.remove('selected');
  });

  li.addEventListener('click',()=>{
    li.classList.toggle('done');
  });
}


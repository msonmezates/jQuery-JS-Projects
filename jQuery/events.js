//click() event

// $('h1').click(()=>alert('h1 is clicked')) //outputs alert to the screen

// $('button').click(function(){  //change background to green when button clicked
//   $(this).css('background','green')
// })

// $('button').click(function(){  //This gives the text when button is clicked
//   let text = $(this).text();
//   console.log(text)
// })


//keypress() event
// $('input').keypress(()=>console.log('you pressed a key'));  //it outputs the text every time a key is pressed

// $('input').keypress(e=>{ //Here event object gives us key values. In this case, we can use event.which
//   console.log(e);
// });

// $('input').keypress(e=>{  //if user presses enter, console.log
//   if(e.which === 13) {
//     alert('you hit enter')  
//   }
// });
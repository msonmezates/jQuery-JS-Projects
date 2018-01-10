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


//on() event

// $('h1').on('click',function(){ //change color to red when h1 is clicked
//   $('h1').css('color','red')  //this is problematic because it applies to all h1s
// })  //therefore we need to use this keyword to change one item at a time

// $('h1').on('click',function(){
//   $(this).css('color','red')
// });

// $('input').on('keypress',function(){  //using keypress() with on() method
//   console.log('key pressed')
// })

// $('button').on('mouseenter',function(){  //when we hover over, the font changes to bold but it stays as bold
//   $(this).css('font-weight','bold')
// })
// $('button').on('mouseleave',function(){ //when we use mouseleave(), font goes back to normal so it adds toggling 
//   $(this).css('font-weight','normal')
// })
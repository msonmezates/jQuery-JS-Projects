// $('button').click(function(){
//   $('div').fadeOut('slow')
// });
//OR
// $('button').on('click',()=> {  //fadeOut() sets div's display value to none. That's why they are invisible
// 	$('div').fadeOut(2000, function(){
// 		// $(this).remove();
// 	});
// })
// $('button').on('click',()=> {
// 	$('div').fadeIn(1000);
// });

//If we wanna toggle, we use fadeTogle()
// $('button').on('click',()=> {
// 	$('div').fadeToggle(500);
// });

//We can also use slideDown() to animate
// $('button').on('click',()=> {  //Note that I have to set div's dislay to none for this one
// 	$('div').slideDown();
// });

// $('button').on('click',()=> {  //Note that I have to set div's dislay to none for this one
// 	$('div').slideUp();
// });

//We can also use slideToggle()
// $('button').on('click',()=> {  //Note that I have to set div's dislay to none for this one
// 	$('div').slideToggle(1000, ()=>console.log('slide is done'));
// });

//OR

$('button').on('click',()=> {  //Note that I have to set div's dislay to none for this one
	$('div').slideToggle(1000, function(){
		$(this).remove();
	});
});



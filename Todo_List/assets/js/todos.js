//Check off specific Todos By Clicking
$('ul').on('click', 'li', function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation(); //stops bubbling up
});

$('input[type="text"]').keypress(function(e){
	if (e.which === 13) {
		let todoText =  $(this).val();
		$(this).val('');
		$('ul').append(`<li><span>X</span> ${todoText}</li>`);
	}
});

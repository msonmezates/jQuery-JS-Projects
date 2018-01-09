// $('h1')[0];
// // <h1>​jQuery Methods Demo Page​</h1>​

// $('h1').text()
// // jQuery Methods Demo Page

// $('ul').text()
// // 
// // 		Skittles
// // 		Starburst
// // 		Twix
// // 	

// $('li').text()
// // "SkittlesStarburstTwix"

// $('h1').text('Assign a new text')
// $('h1').text('jQuery Methods Demo Page')
// // "Assign a new text"
// $('li:first-child').text('bonibon')
// $('li:first-child').text('Skittles')

// $('ul').html()
// // "
// // 		<li>Skittles</li>
// // 		<li>Starburst</li>
// // 		<li>Twix</li>
// // 	"

// $('ul').html('<li>I hacked your UL</li><li>I did it again!</li>')

// $('li').html('<a href="google.com">Click Me</a>')

//attr() method
$('input').attr('type') //outputs text
$('input').attr('type','color') //changes input to color type
$('input').attr('type','checkbox') //changes to checkbox
$('input').attr('type','text') //go back to text type

$('img').css('width','200px') //change img sizes to 200px
$('img:first-of-type').css('height','300px') //change the first image's height
$('img:first-of-type').css('src','http://www.whatever') //we can change the source
$('img').last().css('width','100px') // we can target last element with last()

//val() method
$('input').val() //outputs empty string if there is nothing otherwise it gives the value for input
$('input').val('Mehmet') //updates the input as 'Mehmet'
$('input').val("") // By using empty string, we can reset the text input. This is very common
$('select').val() //outputs 'Toad' if we already selected Toad so we can use with dropdown menus

//Manupulating classes
$('h1').addClass('correct') //h1 turns to green
$('h1').removeClass('correct') //removes .correct class
$('li').addClass('wrong') //all li has .wrong class properties
$('li').removeClass('wrong')
$('li').first().toggleClass('done') //the first li item has .done class properties
$('li').first().toggleClass('done') //if I apply the same class then it goes back to old class...toggling

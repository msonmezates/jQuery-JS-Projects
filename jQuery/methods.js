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

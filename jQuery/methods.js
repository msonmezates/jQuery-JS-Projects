$('h1')[0];
// <h1>​jQuery Methods Demo Page​</h1>​

$('h1').text()
// jQuery Methods Demo Page

$('ul').text()
// 
// 		Skittles
// 		Starburst
// 		Twix
// 	

$('li').text()
// "SkittlesStarburstTwix"

$('h1').text('Assign a new text')
$('h1').text('jQuery Methods Demo Page')
// "Assign a new text"
$('li:first-child').text('bonibon')
$('li:first-child').text('Skittles')

$('ul').html()
// "
// 		<li>Skittles</li>
// 		<li>Starburst</li>
// 		<li>Twix</li>
// 	"

$('ul').html('<li>I hacked your UL</li><li>I did it again!</li>')

$('li').html('<a href="google.com">Click Me</a>')

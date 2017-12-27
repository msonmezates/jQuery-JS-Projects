const movies = [
	{
		title: 'Star Wars',
		rating: '4.8',
		hasWatched: true
	},
	{
		title: 'Brave Heart',
		rating: '5',
		hasWatched: true
	},
	{
		title: 'Die Hard',
		rating: '4',
		hasWatched: false
	}
];

movies.forEach(movie => {
	console.log(buildString(movie));
});

function buildString(movie) {
	let result = 'You have ';
	if(!movie.hasWatched) {
		result += 'not seen ';
	} else {
		result += 'watched ';
	}
	result += '\"' + movie.title + '\" - ';
	result += movie.rating + ' stars';
	return result;
}
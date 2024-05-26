let apiKey = "28f2e59854b3ec9128d8d58d49a8c220";
let imgUrlBase = 'https://image.tmdb.org/t/p/w200'

const moviesContainer = document.querySelector(".section-movies");

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGYyZTU5ODU0YjNlYzkxMjhkOGQ1OGQ0OWE4YzIyMCIsInN1YiI6IjY2NTEzYWU1MDc4NmNhNmZjMjkwODA2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C9CWDyKWDete3vDP-lBl8WYhz-k_h4Fc-V_fBLAOwb0",
	},
};

fetch("https://api.themoviedb.org/3/movie/popular", options)
	.then((response) => response.json())
	.then((response) =>getMovies(response))
	.catch((err) => console.error(err));

function createMovieCard(img, title) {
	let containerMovies = document.querySelector(".container-movies");

	// Creacion del container de la card
	let card = document.createElement("div");
	card.classList.add("card");

	let imgMovie = document.createElement("img");
	imgMovie.src = `${img}`

	let titleText = document.createElement("p");
	titleText.textContent = `${title}`;
	titleText.classList.add('text-center')
	let cardBody = document.createElement("div");
	cardBody.classList.add("card-body");

	cardBody.appendChild(titleText);
	card.appendChild(imgMovie);
	card.appendChild(cardBody);
	containerMovies.appendChild(card);
}

const getMovies = (data) => {

	// Se recorre el array de peliculas
	for (let i = 0; i < data.results.length; i++) {
		const movie = data.results[i];
		
		let title = movie.title;
		let imageUrl = `${imgUrlBase}${movie.poster_path}`;

		createMovieCard(imageUrl, title);
		
	}
 };

document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = "5ebd56d8354e4c3fae9a0203091e5bf6"
let url_base = 'https://api.themoviedb.org/3/search/movie'
let url_img = 'https://image.tmdb.org/t/p/w500/'

let resultContainer = document.getElementById('results')


function searchMovies() {
    resultContainer.innerHTML = "Loading..."
    let searchInput = document.getElementById('searchInput').value
    fetch(`${url_base}?query=${searchInput}&api_key=${api_key}`)
        .then(response => response.json())
        .then(response => displayMovies(response.results))

    
}

function displayMovies(movies) {
    resultContainer.innerHTML = ""


    if (movies.length === 0) {
        resultContainer.innerHTML = '<p>Pelicula no encontrada</p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = "La Fecha de lanzamiento fue " + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = "La sinopsis de la película es: " + movie.overview

        let posterPath = url_img + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)
    })


}
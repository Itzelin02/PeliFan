document.addEventListener('DOMContentLoaded', function() {
    const genreSelect = document.getElementById('genre-select');
    const getRecommendationsButton = document.getElementById('get-recommendations');
    const movieList = document.getElementById('movie-list');

    getRecommendationsButton.onclick = function() {
        const selectedGenre = genreSelect.value;
        if (selectedGenre !== "") {
            const recommendation = movieRecommendationFactory.createRecommendation(selectedGenre);
            const movies = recommendation.getRecommendations();
            showMovies(movies);
        } else {
            alert('Please select a genre');
        }
    };

    function showMovies(movies) {
        movieList.innerHTML = '';
        for (let i = 0; i < movies.length; i++) {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <h3>${movies[i].title}</h3>
                <p>${movies[i].description}</p>
            `;
            movieList.appendChild(movieCard);
        }
    }
});

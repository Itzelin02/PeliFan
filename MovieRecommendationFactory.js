class MovieRecommendation {
    constructor(genre) {
        this.genre = genre;
    }

    getRecommendations() {
        return movieData.getMoviesByGenre(this.genre);
    }
}

class MovieRecommendationFactory {
    createRecommendation(genre) {
        return new MovieRecommendation(genre);
    }
}

const movieRecommendationFactory = new MovieRecommendationFactory();
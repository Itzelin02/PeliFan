class MovieDataSingleton {
    constructor() {
        if (MovieDataSingleton.instance) {
            return MovieDataSingleton.instance;
        }
        this.movies = {
                action: [
                    { title: 'Mad Max: Fury Road', description: 'Post-apocalyptic chase.' },
                    { title: 'Die Hard', description: 'Terrorists in skyscraper.' },
                    { title: 'The Dark Knight', description: 'Batman vs. Joker.' },
                    { title: 'Gladiator', description: 'Roman revenge.' },
                    { title: 'John Wick', description: 'Hitman avenges dog.' },
                ],
                comedy: [
                    { title: 'Superbad', description: 'High school party.' },
                    { title: 'The Hangover', description: 'Lost in Vegas.' },
                    { title: 'Anchorman', description: '70s news rivalry.' },
                    { title: 'Step Brothers', description: 'Adult stepbrothers.' },
                    { title: 'Groundhog Day', description: 'Repeating day.' },
                ],
                drama: [
                    { title: 'The Shawshank Redemption', description: 'Prison friendship.' },
                    { title: 'Forrest Gump', description: 'Simple man\'s journey.' },
                    { title: 'The Godfather', description: 'Crime family saga.' },
                    { title: 'Schindler\'s List', description: 'Holocaust hero.' },
                    { title: 'Fight Club', description: 'Underground fights.' },
                ],
                horror: [
                    { title: 'The Exorcist', description: 'Demonic possession.' },
                    { title: 'A Nightmare on Elm Street', description: 'Killer in dreams.' },
                    { title: 'The Shining', description: 'Haunted hotel.' },
                    { title: 'Halloween', description: 'Masked killer.' },
                    { title: 'Get Out', description: 'Disturbing family secret.' },
                ],
            };            
        MovieDataSingleton.instance = this;
    }

    getMoviesByGenre(genre) {
        if (this.movies[genre]) {
            return this.movies[genre];
        } else {
            return [];
        }
    }    
}

const movieData = new MovieDataSingleton();
movieData.isFrozen = true;
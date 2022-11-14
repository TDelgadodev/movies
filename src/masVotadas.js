const fs = require ('fs')

let masVotadas = {
    db:'./data/movies.json',
    titulo: 'Mas Votadas',
    leerJSON: function(){
        let moviesJSON = fs.readFileSync(this.db, 'utf-8');
        let movies = JSON.parse(moviesJSON);
        return movies
        
    },
    listarPelis: function(){
        let movies = this.leerJSON().movies;
        movies = movies.filter(function(movie){
            return movie.vote_average >= 7
        })
        return movies
    },
    cantidad: function(){
        return this.listarPelis().length
    },
    promedio: function(){
        let promedios = 0
        let movies = this.leerJSON().movies;
        movies = movies.filter(function(movie){
            return movie.vote_average >= 7
        })
        movies.forEach(function(movie) {
            promedios = promedios + movie.vote_average
        })
        promedios = promedios/movies.length
        return promedios.toFixed(2)
    }, 
}

module.exports = masVotadas
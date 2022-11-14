const contacto = require ('./contacto');
const enCartelera = require ('./enCartelera');
const homePage = require ('./homePage');
const masVotadas = require ('./masVotadas');
const preguntasFrecuentes = require ('./preguntasFrecuentes');
const sucursales = require ('./sucursales');
const { listarSalas } = require('./sucursales');
let index = {
    homePage:function(res){
       
            //Titulo
            res.write(homePage.titulo)
            res.write('\n\n')
            //Cantidad de películas
            res.write('Total: ' + homePage.cantidad() + '\n\n')
            //titulos de peliculas ordanados
            let pelis = homePage.listarPelis()
            for(peli of pelis){
                res.write(peli)
                res.write('\n')
            }
            //Pié de página
            res.write('\nRecordá que podés visitar las secciones: \n\n');
            res.write('I. En Cartelera\n');
            res.write('II. Más Votadas\n');
            res.write('III. Sucursales\n');
            res.write('IV. Contacto\n');
            res.write('V. Preguntas Frecuentes\n');
            res.end()

    },
    enCartelera:function(res){
//Titulo
res.write(enCartelera.titulo)
res.write('\n\n')
//Total de películas
res.write('Total: ' + enCartelera.cantidad() + '\n\n')
//Listado de peliculas. Titulo + Reseña
let peliculas = enCartelera.listarPelis()
for(pelicula of peliculas){
    res.write(pelicula.title)
    res.write('\n')
    res.write(pelicula.overview)
    res.write('\n\n')
}
res.end()
    },
    masVotadas:function(res){
        res.write(masVotadas.titulo)
        res.write('\n\n');
        res.write('Total de votadas: ' + masVotadas.cantidad())
        res.write('\n\n')
        res.write('\n\n Rating promedio: ' + masVotadas.promedio())
        res.write('\n\n')
        res.write('Listado de peliculas\n\n')
        let movies = masVotadas.listarPelis();
        movies.forEach(function(movie){
            res.write('\n')
            res.write(movie.title + 'Rating:' + movie.vote_average)
            res.write('\n')
            res.write(movie.overview)
            res.write('\n')
        });
        res.end()
    },
    sucursales:function(res){
        res.write(sucursales.titulo);
        res.write('\n\n');
        res.write('Total de salas:' + sucursales.cantidad());
        res.write('\n\n');
        res.write('Listado de salas:\n\n');
        let salas = sucursales.listarSalas();
        salas.forEach(function(theater){
            res.write('\n');
            res.write(theater.name);
            res.write('\n');
            res.write(theater.address);
            res.write('\n');
            res.write(theater.description);
        });
        res.end()
    },
    contacto:function(res){
        res.write(contacto.Titulo);
        res.write('\n\n');
        res.write(contacto.Contenido)
        res.end()
    },
    preguntasFrecuentes:function(res){
        res.write(preguntasFrecuentes.titulo);
        res.write('\n\n');
        res.write('Preguntas frecuentes: ' + preguntasFrecuentes.cantidad());
        res.write('\n\n');
        let faqs = preguntasFrecuentes.listarFaqs();
       for (faq of faqs) {
            res.write('\n');
            res.write('Pregunta: ' + faq.faq_title);
            res.write('\n');
            res.write('Resúesta: ' + faq.faq_answer);
            res.write('\n');
           
        }
        res.write('\n');
        res.end();
    }

}
module.exports = index
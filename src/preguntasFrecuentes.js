const fs = require('fs')

let preguntasFrecuentes = {
    db:'./data/faqs.json',
    titulo: 'Preguntas Frecuentes',
    leerJSON: function(){
        let faqsJSON = fs.readFileSync(this.db, 'utf-8');
        let faqs = JSON.parse(faqsJSON);
        return faqs
    },
    cantidad: function(){
        return this.leerJSON().total_faqs
    },
    listarFaqs: function(){
        let faqs = this.leerJSON();
        return faqs.faqs
    }
}
module.exports = preguntasFrecuentes
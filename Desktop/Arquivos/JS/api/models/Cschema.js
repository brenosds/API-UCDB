var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Course = new Schema({
    titulo: String, // String is shorthand for {type: String}
    prof: String,
    cargaHora: String,
    dataInicio: String,
    dataFim: String
});
module.exports = Course
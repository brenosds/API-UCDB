const mongoose = require('mongoose');
const CourseSchema = require('./models/CourseSchema')
mongoose.connect('mongodb+srv://ra174008:senhamongo@cluster0-scqpq.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const Curso = mongoose.model('Curso', CourseSchema);



module.exports = controler = {
   
    async listIndice(id) {
        const CourseAtt = await Curso.find({ _id: mongoose.Types.ObjectId(id) }).then((response) => {
            return response
        })
        return CourseAtt
    },
    async adicionar(data) {
        const novoCurso = new Curso(data);
        await novoCurso.save().then((response) => console.log(response));
        return "Cadastrado!"
    },
    
    async deletar(id) {
        const deletaCurso = await Curso.findOneAndDelete({ _id: mongoose.Types.ObjectId(id) }).then((response) => {
            console.log(response)
        })
        return "Remoção do curso por ID"
    },

    async listar() {
        var arr = await Curso.find().then((response) => {
            return response
        });
        return arr
    },

    async atualizar(data, id) {
        const cursoAtualizado = await Curso.findOneAndReplace({ _id: mongoose.Types.ObjectId(id) }, data).then((response) => {
            console.log(response)
        })
        return "Alterado!"
    }
}
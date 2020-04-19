const mongoose = require('mongoose');
const usuarioSchema = require('./models/userSchema')
mongoose.connect('mongodb+srv://ra174008:senhamongo@cluster0-scqpq.mongodb.net/user?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const User = mongoose.model('User', userSchema);

module.exports = userControler = {
    async lista(email) {
        var arr = await User.find({ email: email }).then((response) => {
            if (response.length != 0)
                return { "mensagem": "Usuário Utilizado" }
            else
                return { "mensagem": "Usuário não Utilizado" }
        });
        return arr
    },
    async adiciona(data) {
        const novoUser = new User(data);
        await novoUser.save().then((response) => console.log(response));
        return { status: 200 }
    }
}
const mongoose = require('mongoose');
const remoteUrl =
  'mongodb+srv://admin:admin@cluster0.gbqb0.mongodb.net/Produtos?retryWrites=true&w=majority';
function connectToDatabase() {
  mongoose
    .connect(`${remoteUrl}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB conectado');
    })
    .catch((err) => {
      return console.log(`Erro de conexão com o banco: ${err}`);
    });
}

module.exports = connectToDatabase;

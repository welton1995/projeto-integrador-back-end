const mongoose = require('mongoose');
const Entradas = require('./Entradas');

const chaveSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  quantidade: {
    type: Number,
    required: true,
    default: 0,
  },
});

chaveSchema.pre('deleteMany', async function (next) {
  const chave = this;
  await Entradas.deleteMany({ chaves: chave._id });
  next();
});


const Chaves = mongoose.model('Chaves',chaveSchema);

module.exports = Chaves;
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

chaveSchema.pre('remove', async function (next) {
  console.log('Middleware pre remove acionado para Chaves');
  
  try {
    const chave = this;
    
    console.log('Removendo entradas relacionadas...');
    await Entradas.deleteMany({ chaves: chave._id });
    
    console.log('Entradas relacionadas removidas com sucesso.');
    next();
  } catch (error) {
    console.error('Erro ao remover entradas relacionadas:', error);
    next(error); // Encaminhar o erro para o próximo middleware
  }
});

const Chaves = mongoose.model('Chaves', chaveSchema);

module.exports = Chaves;

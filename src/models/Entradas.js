const mongoose = require('mongoose');

const entradaSchema = new mongoose.Schema({
    chaves: { type: mongoose.Schema.Types.ObjectId, ref: 'Chaves', required: true },
    quantidade: { type: Number, required: true },
    data: { type: Date, default: Date.now }
});

entradaSchema.pre('deleteMany', function(next){
    this.model('Chaves').deleteMany({ chaves: this._id }, next)
})

const Entradas = mongoose.model('Entradas', entradaSchema);

module.exports = Entradas;
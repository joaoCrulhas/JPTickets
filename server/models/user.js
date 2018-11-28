import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  cpf: String,
  rg: String,
  endereco: String,
  permissoesEventos: [String],
  permissoesIngressos: [String],
  telefone: String,
  nome: String,
  email: String,
});

module.exports = mongoose.model('User', userSchema);

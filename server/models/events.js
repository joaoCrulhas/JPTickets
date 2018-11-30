import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  local: String,
  nome: String,
  atracoes: [String],
  ingressos: [String],
});

module.exports = mongoose.model('Event', eventSchema);

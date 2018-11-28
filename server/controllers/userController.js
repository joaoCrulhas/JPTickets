import mongoose from 'mongoose';
import UserModel from '../models/user';
import Validator from '../validators/validator';


export const index = ((req, res) => {
  res.json({
    title: 'crulhas'
  });
});

// export const getUserInfo = (async (req, res) => {
// });

export function createUser(req, res) {
  const contract = new Validator();
  contract.isRequired(req.body.cpf, 'CPF is required');
  contract.isRequired(req.body.rg, 'RG is required');
  contract.isRequired(req.body.endereco, 'Address is required');
  contract.isRequired(req.body.permissoesEventos, 'Events permission is required');
  contract.isRequired(req.body.permissoesIngressos, 'Tickets permission is required');
  contract.isRequired(req.body.telefone, 'Phone is required');
  contract.isRequired(req.body.nome, 'Name is required');
  contract.isRequired(req.body.email, 'Email is required');

  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
  }

  const user = new UserModel({
    cpf: req.body.cpf,
    endereco: req.body.endereco,
    permissoesEventos: req.body.permissoesEventos,
    permissoesIngressos: req.body.permissoesIngressos,
    telefone: req.body.telefone,
    nome: req.body.nome,
    email: req.body.email,
    rg: req.body.rg,
  });

  user.save()
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.error(err);
    });
}

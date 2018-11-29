import UserModel from '../models/user';
import Validator from '../validators/validator';

// Create a new user
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
    return res.status(400).send(contract.errors()).end();
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

  return user.save()
    .then(doc => res.status(201).json({ Msg: doc }))
    .catch(err => res.status(400).json({ Msg: err }));
}
// Gel all users
export function getAllUsers(req, res) {
  UserModel.find({}, (err, docs) => {
    if (err) {
      return res.status(400).json({ Error: err });
    }
    return res.status(200).json({ Users: docs });
  });
}
// Delete Users all users
export function deleteUser(req, res) {
  UserModel.remove({ _id: req.params.userID }, (err) => {
    if (!err) {
      return res.status(200).json({ User: 'User deleted!' });
    }
    return res.status(200).json({ User: err });
  });
}
// Get user info
export function getUserInfo(req, res) {
  UserModel.findById(req.params.userID, ' -__v').exec((err, doc) => {
    if (err) return res.status(400).json({ Error: err });
    return res.status(200).json(doc);
  });
}
// Update user
export function updateUser(req, res) {
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
    return res.status(400).send(contract.errors()).end();
  }
  const { cpf, rg, endereco, permissoesEventos, permissoesIngressos,
    telefone, nome, email } = req.body;

  return UserModel.findOneAndUpdate({ _id: req.params.userID },
    { cpf, rg, endereco, permissoesEventos, permissoesIngressos, telefone, nome, email },
    { upsert: true, new: true }, (err, User) => {
      if (err) return res.send(500, { error: err });
      return res.status(200).json({ User });
    });
}

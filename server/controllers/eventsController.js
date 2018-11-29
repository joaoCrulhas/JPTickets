import EventModel from '../models/events';
import Validator from '../validators/validator';

// Create a new user
export function createEvent(req, res) {
  const contract = new Validator();
  contract.isRequired(req.body.local, 'Informar o local');
  contract.isRequired(req.body.nome, 'Informar nome do evento');
  contract.isRequired(req.body.atracoes, 'Informe as atracoes');
  contract.isRequired(req.body.ingressos, 'Ingressos sao necessarios');
  if (!contract.isValid()) {
    return res.status(500).send(contract.errors()).end();
  }
  const event = new EventModel({
    local: req.body.local,
    nome: req.body.nome,
    atracoes: req.body.atracoes,
    ingressos: req.body.ingressos,
  });

  return event.save()
    .then(doc => res.status(201).json({ Msg: doc }))
    .catch(err => res.status(500).json({ Msg: err }));
}
// Gel all events
export function getAllEvents(req, res) {
  EventModel.find({}, (err, docs) => {
    if (err) {
      return res.status(400).json({ Error: err });
    }
    return res.status(200).json({ Event: docs });
  });
}

// Delete Users all users
export function deleteEvent(req, res) {
  EventModel.remove({ _id: req.params.eventID }, (err) => {
    if (!err) {
      return res.status(200).json({ Event: 'Event deleted!' });
    }
    return res.status(200).json({ Event: err });
  });
}

// Get user info
export function getEventInfo(req, res) {
  EventModel.findById(req.params.eventID, ' -__v').exec((err, doc) => {
    if (err) return res.status(400).json({ Error: err });
    return res.status(200).json(doc);
  });
}

// Update user
export function updateEvent(req, res) {
  const contract = new Validator();
  contract.isRequired(req.body.local, 'Informar o local');
  contract.isRequired(req.body.nome, 'Informar nome do evento');
  contract.isRequired(req.body.atracoes, 'Informe as atracoes');
  contract.isRequired(req.body.ingressos, 'Ingressos sao necessarios');

  if (!contract.isValid()) {
    return res.status(500).send(contract.errors()).end();
  }

  const { local, nome, atracoes, ingressos } = req.body;

  return EventModel.findOneAndUpdate({ _id: req.params.eventID },
    { local, nome, atracoes, ingressos },
    { upsert: true, new: true }, (err, Event) => {
      if (err) return res.send(500, { error: err });
      return res.status(200).json({ Event });
    });
}

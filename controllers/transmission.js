const Transmission  =   require('../models/transmission');
const User          =   require('../models/user');

exports.getOneTransmission = (req, res, next) => {
    Transmission.findOne({ _id:     req.body.id})
        .then( transmission => {
            return res.status(200).json(transmission);
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getAllTransmissions = (req, res, next) => {
    Transmission.find()
        .then(transmissions => res.status(200).json({ transmissions: transmissions }))
        .catch(error => res.status(404).json({ error }));
};

exports.createTransmission = (req, res, next) => {
    const transmissionObject = JSON.parse(req.body.transmission);
    delete transmissionObject._id;
    const transmission = new Transmission({
        ...transmissionObject
    });
    transmission.save()
        .then(() => res.status(201).json({ message: 'Transmission enregistrée'}))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteTransmission = (req, res, next) => {
    Transmission.deleteOne({ _id: req.body.id})
        .then(() => res.status(200).json({ message: 'Transmission supprimée'}))
        .catch(error => res.status(400).json({ error }));
};

exports.updateTransmission = (req, res, next) => {
    const transmissionObject = { ...req.body };
    Transmission.updateOne({ _id: req.body.id })
        .then(() => res.status(200).json({ message: 'Transmission mise à jour'}))
        .catch(error => res.status(400).json({ error }));
};
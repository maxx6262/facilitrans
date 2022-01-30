const express   =   require('express');
const router    =   express.Router();

const transmissionCtrl = require('../controllers/transmission');

router.get('/:id', auth, transmissionCtrl.getOneTransmission);
router.get('/', auth, transmissionCtrl.getAllTransmissions);
router.post('/', auth, transmissionCtrl.createTransmission);
router.delete('/:id', auth, transmissionCtrl.deleteTransmission);
router.put('/:id', auth, transmissionCtrl.updateTransmission);
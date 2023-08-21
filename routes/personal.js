const {Router} = require('express');
const {getPersonal, postPersonal, putPersonal, deletePersonal } = require('../controllers/personal')

const router = Router();

router.get('/ver', getPersonal);

router.post('/agregar', postPersonal);

router.put('/editar/:id', putPersonal);

router.delete('/eliminar/:id', deletePersonal);



module.exports = router; 
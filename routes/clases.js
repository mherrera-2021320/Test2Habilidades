const {Router} = require('express');
const {getClases, postClases, putClases, deleteClase } = require('../controllers/clases')

const router = Router();

router.get('/ver', getClases);

router.post('/agregar', postClases);

router.put('/editar/:id', putClases);

router.delete('/eliminar/:id', deleteClase);



module.exports = router; 
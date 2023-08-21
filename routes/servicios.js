const {Router} = require('express');
const { getServicios, postServicios, putServicios, deleteServicios } = require('../controllers/servicios')

const router = Router();

router.get('/ver', getServicios);

router.post('/agregar', postServicios);

router.put('/editar/:id', putServicios);

router.delete('/eliminar/:id', deleteServicios);


module.exports = router; 
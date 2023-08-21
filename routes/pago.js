const {Router} = require('express');
const { getPagos, postPagos, putPago, deletePagos } = require('../controllers/pagos')

const router = Router();

router.get('/ver', getPagos);

router.post('/agregar', postPagos);

router.put('/editar/:id', putPago);

router.delete('/eliminar/:id', deletePagos);



module.exports = router; 
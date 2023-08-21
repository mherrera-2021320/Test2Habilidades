const {Router} = require('express');
const { getVehiculos, postVehiculos, putVehiculo, deleteVehiculo } = require('../controllers/vehiculos')

const router = Router();

router.get('/ver', getVehiculos);

router.post('/agregar', postVehiculos);

router.put('/editar/:id', putVehiculo);

router.delete('/eliminar/:id', deleteVehiculo);



module.exports = router; 
const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');

const { getCliente, postClientes, putClientes, deleteClientes } = require('../controllers/clientes')

const router = Router();

router.get('/ver', getCliente);

router.post('/agregar', [

    check('nombre', 'El nombre es Indispensable').not().isEmpty(),
    check('dpi', 'El dpi es Indispensable').not().isEmpty().isLength({ max: 13 }),
    check('direccion', 'La direccion es Indispensable').not().isEmpty(),
    check('correo', 'El correo es Indispensable').isEmail(),
    check('telefono', 'El dpi es Indispensable').not().isEmpty(),
    check('estado', 'Escriba si la Cuenta es esta Activo o Inactivo').not().isEmpty(),
    validarCampos
], postClientes);

router.put('/editar/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('nombre', 'El nombre es Indispensable').not().isEmpty(),
    check('dpi', 'El dpi es Indispensable').not().isEmpty().isLength({ max: 13 }),
    check('direccion', 'La direccion es Indispensable').not().isEmpty(),
    check('correo', 'El correo es Indispensable').not().isEmpty(),
    check('telefono', 'El dpi es Indispensable').not().isEmpty(),
    check('estado', 'Escriba si la Cuenta es esta Activo o Inactivo').not().isEmpty(),
    validarCampos
], putClientes);

router.delete('/eliminar/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos
], deleteClientes);



module.exports = router; 
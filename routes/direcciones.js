const {Router} = require('express');
const { getDirecciones, postDirecciones, putDirecciones, deleteDirecciones } = require('../controllers/direcciones')

const router = Router();

router.get('/ver', getDirecciones);

router.post('/agregar', postDirecciones);

router.put('/editar/:id', putDirecciones);

router.delete('/eliminar/:id', deleteDirecciones);



module.exports = router; 
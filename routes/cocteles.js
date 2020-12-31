const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const coctelesController = require('../controllers/coctelesController');

// Nuevo Coctel
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
        check('precio', 'El precio es obligatorio').not().isEmpty(),
        check('categoria', 'La categoria es obligatoria').not().isEmpty(),
    ],
    coctelesController.nuevoCoctel
);

// Editar Coctel
router.put('/editar/:id',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
        check('precio', 'El precio es obligatorio').not().isEmpty(),
        check('categoria', 'La categoria es obligatoria').not().isEmpty(),
    ],
    coctelesController.editarCoctel
);

router.delete('/:id',
    coctelesController.eliminarCoctel
);

router.get('/todos',
    coctelesController.traerTodosLosCocteles
);

router.get('/uno/:id',
    coctelesController.coctelPorID
);


module.exports = router;
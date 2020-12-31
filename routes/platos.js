const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const platosController = require('../controllers/platosController');

// Nuevo plato
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('precio', 'El precio es obligatorio').not().isEmpty(),
        check('categoria', 'La categoria es obligatoria').not().isEmpty(),
    ],
    platosController.nuevoPlato
);

// Editar plato
router.put('/editar/:id',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('precio', 'El precio es obligatorio').not().isEmpty(),
        check('categoria', 'La categoria es obligatoria').not().isEmpty(),
    ],
    platosController.editarPlato
);

router.delete('/:id',
    platosController.eliminarPlato
);

router.get('/todos',
    platosController.traerTodosLosPlatos
);

router.get('/uno/:id',
    platosController.platoPorID
);


module.exports = router;
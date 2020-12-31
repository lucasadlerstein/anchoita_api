const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const vinosController = require('../controllers/vinosController');

// Nuevo vino
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('precio', 'El precio es obligatorio').not().isEmpty(),
        check('pais', 'El pais es obligatorio').not().isEmpty(),
        check('region', 'La region es obligatoria').not().isEmpty(),
        check('tipo', 'El tipo de vino es obligatorio').not().isEmpty(),
        check('uva', 'La uva es obligatoria').not().isEmpty()
    ],
    vinosController.nuevoVino
);

// Editar vino
router.put('/editar/:id',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('precio', 'El precio es obligatorio').not().isEmpty(),
        check('pais', 'El pais es obligatorio').not().isEmpty(),
        check('region', 'La region es obligatoria').not().isEmpty(),
        check('tipo', 'El tipo de vino es obligatorio').not().isEmpty(),
        check('uva', 'La uva es obligatoria').not().isEmpty()
    ],
    vinosController.editarVino
);

router.delete('/:id',
    vinosController.eliminarVino
);

router.get('/todos',
    vinosController.traerTodosLosVinos
);

router.get('/uno/:id',
    vinosController.vinoPorID
);


module.exports = router;
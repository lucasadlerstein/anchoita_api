const { validationResult } = require('express-validator');
const db = require("../models");
const Platos = db.platos;

// Crear plato
exports.nuevoPlato = async (req, res) => {
    // Mensajes de error de express validator
    // const errores = validationResult(req);
    // if(!errores.isEmpty()){
    //     return res.status(400).json({errores: errores.array()});
    // }

    const nuevoPlato = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        vegano: req.body.vegano,
        vegetariano: req.body.vegetariano,
        celiaco: req.body.celiaco,
        picante: req.body.picante,
        destacado: req.body.destacado,
        categoria: req.body.categoria,
        en_nombre: req.body.en_nombre,
        en_descripcion: req.body.en_descripcion
    }

    await Platos.create(nuevoPlato).then(resultado => {
        return res.json({respuesta: 'creado'});
    }) 
    .catch(error => {
        return res.status(400).json({respuesta: 'error', error});
    })
}

exports.editarPlato = async (req, res) => {
    // Mensajes de error de express validator
    // const errores = validationResult(req);
    // if(!errores.isEmpty()){
    //     return res.status(400).json({errores: errores.array()});
    // }

    if(req.params.id === null || req.params.id === undefined || req.params.id === '') {
        return res.status(400).json({respuesta: 'error', error: 'No hay ID del Plato'})
    } else {
        const actualizadoPlato = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            vegano: req.body.vegano,
            vegetariano: req.body.vegetariano,
            celiaco: req.body.celiaco,
            picante: req.body.picante,
            destacado: req.body.destacado,
            categoria: req.body.categoria,
            en_nombre: req.body.en_nombre,
            en_descripcion: req.body.en_descripcion
        }
    
        await Platos.update(actualizadoPlato, {where: {id: req.params.id}}).then(resultado => {
            return res.json({respuesta: 'actualizado'});
        }) 
        .catch(error => {
            return res.status(400).json({respuesta: 'error', error});
        })
    }

}

exports.eliminarPlato = async (req, res) => {
    await Platos.destroy({where: {id: req.params.id}})
        .then(respuesta => {
            return res.json({resultado: respuesta})
        })
        .catch(error => {
            return res.status(500).json({resultado: 'error', error: error})
        })
}

exports.traerTodosLosPlatos = async (req, res) => {
    await Platos.findAll()
        .then(resp => {
            return res.json({respuesta: 'ok', platos: resp})
        })
        .catch(err => {
            return res.status(400).json({respuesta: 'error', error: err})
        })
}

exports.platoPorID = async (req, res) => {
    await Platos.findOne({where: {id: req.params.id}})
    .then(resp => {
        return res.json({respuesta: 'ok', plato: resp})
    })
    .catch(err => {
        return res.status(400).json({respuesta: 'error', error: err})
    })
}
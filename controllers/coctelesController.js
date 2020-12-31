const { validationResult } = require('express-validator');
const db = require("../models");
const Cocteleria = db.cocteleria;

exports.nuevoCoctel = async (req, res) => {
    // Mensajes de error de express validator
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()});
    }

    const nuevoCoctel = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        categoria: req.body.categoria,
        categoria2: req.body.categoria2,
        cristaleria: req.body.cristaleria,
        origen: req.body.origen,
        medida: req.body.medida,
        region: req.body.region,
        region: req.body.region,
        stock: true,
        visible: true,
        en_nombre: req.body.en_nombre,
        en_descripcion: req.body.en_descripcion
    }

    await Cocteleria.create(nuevoCoctel).then(resultado => {
        return res.json({respuesta: 'creado'});
    }) 
    .catch(error => {
        return res.status(400).json({respuesta: 'error', error});
    })
}

exports.editarCoctel = async (req, res) => {
    // Mensajes de error de express validator
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()});
    }

    if(req.params.id === null || req.params.id === undefined || req.params.id === '') {
        return res.status(400).json({respuesta: 'error', error: 'No hay ID del vino'})
    } else {
        const actualizadoCoctel = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            categoria: req.body.categoria,
            categoria2: req.body.categoria2,
            cristaleria: req.body.cristaleria,
            origen: req.body.origen,
            medida: req.body.medida,
            region: req.body.region,
            region: req.body.region,
            stock: req.body.stock,
            visible: req.body.visible,
            en_nombre: req.body.en_nombre,
            en_descripcion: req.body.en_descripcion
        }
    
        await Cocteleria.update(actualizadoCoctel, {where: {id: req.params.id}}).then(resultado => {
            return res.json({respuesta: 'actualizado'});
        }) 
        .catch(error => {
            return res.status(400).json({respuesta: 'error', error});
        })
    }

}

exports.eliminarCoctel = async (req, res) => {
    await Cocteleria.destroy({where: {id: req.params.id}})
        .then(respuesta => {
            return res.json({resultado: respuesta})
        })
        .catch(error => {
            return res.status(500).json({resultado: 'error', error: error})
        })
}

exports.traerTodosLosCocteles = async (req, res) => {
    await Cocteleria.findAll()
        .then(resp => {
            return res.json({respuesta: 'ok', cocteles: resp})
        })
        .catch(err => {
            return res.status(400).json({respuesta: 'error', error: err})
        })
}

exports.coctelPorID = async (req, res) => {
    await Cocteleria.findOne({where: {id: req.params.id}})
    .then(resp => {
        return res.json({respuesta: 'ok', coctel: resp})
    })
    .catch(err => {
        return res.status(400).json({respuesta: 'error', error: err})
    })
}
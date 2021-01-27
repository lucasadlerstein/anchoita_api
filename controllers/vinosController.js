const { validationResult } = require('express-validator');
const db = require("../models");
const Vinos = db.vinos;

// Crear categoria
exports.nuevoVino = async (req, res) => {
    // Mensajes de error de express validator
    // const errores = validationResult(req);
    // if(!errores.isEmpty()){
    //     return res.status(400).json({errores: errores.array()});
    // }

    const nuevoVino = {
        nombre: req.body.nombre,
        anada: req.body.anada,
        bodega: req.body.bodega,
        precio: req.body.precio,
        vinedo: req.body.vinedo,
        pais: req.body.pais,
        region: req.body.region,
        tipo: req.body.tipo,
        uva: req.body.uva,
        copa: req.body.copa,
        t375: req.body.t375,
        t500: req.body.t500,
        t750: req.body.t750,
        t1125: req.body.t1125,
        t1500: req.body.t1500,
        t3000: req.body.t3000,
        c140: req.body.c140,
        c120: req.body.c120,
        c70: req.body.c70,
        c35: req.body.c35,
        stock: true,
        visible: true,
        en_nombre: req.body.en_nombre
    }

    await Vinos.create(nuevoVino).then(resultado => {
        return res.json({respuesta: 'creado'});
    })
    .catch(error => {
        return res.status(400).json({respuesta: 'error', error});
    })
}

exports.editarVino = async (req, res) => {
    // Mensajes de error de express validator
    // const errores = validationResult(req);
    // if(!errores.isEmpty()){
    //     return res.status(400).json({errores: errores.array()});
    // }

    if(req.params.id === null || req.params.id === undefined || req.params.id === '') {
        return res.status(400).json({respuesta: 'error', error: 'No hay ID del vino'})
    } else {
        const actualizadoVino = {
            nombre: req.body.nombre,
            anada: req.body.anada,
            bodega: req.body.bodega,
            precio: req.body.precio,
            vinedo: req.body.vinedo,
            pais: req.body.pais,
            region: req.body.region,
            tipo: req.body.tipo,
            uva: req.body.uva,
            copa: req.body.copa,
            t375: req.body.t375,
            t500: req.body.t500,
            t750: req.body.t750,
            t1125: req.body.t1125,
            t1500: req.body.t1500,
            t3000: req.body.t3000,
            c140: req.body.c140,
            c120: req.body.c120,
            c70: req.body.c70,
            c35: req.body.c35,
            stock: req.body.stock,
            visible: req.body.visible,
            en_nombre: req.body.en_nombre
        }
    
        await Vinos.update(actualizadoVino, {where: {id: req.params.id}}).then(resultado => {
            return res.json({respuesta: 'actualizado'});
        }) 
        .catch(error => {
            return res.status(400).json({respuesta: 'error', error});
        })
    }

}

exports.eliminarVino = async (req, res) => {
    await Vinos.destroy({where: {id: req.params.id}})
        .then(respuesta => {
            return res.json({resultado: respuesta})
        })
        .catch(error => {
            return res.status(500).json({resultado: 'error', error: error})
        })
}

exports.traerTodosLosVinos = async (req, res) => {
    await Vinos.findAll()
        .then(resp => {
            return res.json({respuesta: 'ok', vinos: resp})
        })
        .catch(err => {
            return res.status(400).json({respuesta: 'error', error: err})
        })
}

exports.vinoPorID = async (req, res) => {
    await Vinos.findOne({where: {id: req.params.id}})
    .then(resp => {
        return res.json({respuesta: 'ok', vino: resp})
    })
    .catch(err => {
        return res.status(400).json({respuesta: 'error', error: err})
    })
}
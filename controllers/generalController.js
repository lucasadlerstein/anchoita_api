const db = require("../models");
const Cocteleria = db.cocteleria;
const Vinos = db.vinos;
const Platos = db.platos;

exports.visibilidadGeneral = async (req, res) => {

    if(req.params.categoria === 'cocteleria') {
        Cocteleria.findOne({ where: { id: req.params.id } })
        .then(coctel => {
            const nuevaVisibilidad = !(coctel.visible);
            coctel.visible = nuevaVisibilidad;
            coctel.save();
            return res.json({realizado: 'exito'})
        })
        .catch(error => {
            return res.status(500).json({realizado: 'error', error})
        })
    } else if (req.params.categoria === 'platos') {
        Platos.findOne({ where: { id: req.params.id } })
        .then(plato => {
            const nuevaVisibilidad = !(plato.visible);
            plato.visible = nuevaVisibilidad;
            plato.save();
            return res.json({realizado: 'exito'})
        })
        .catch(error => {
            return res.status(500).json({realizado: 'error', error})
        })
    } else if (req.params.categoria === 'vinos') {
        Vinos.findOne({ where: { id: req.params.id } })
        .then(vinos => {
            const nuevaVisibilidad = !(vinos.visible);
            vinos.visible = nuevaVisibilidad;
            vinos.save();
            return res.json({realizado: 'exito'})
        })
        .catch(error => {
            return res.status(500).json({realizado: 'error', error})
        })
    }
}

exports.stockGeneral = async (req, res) => {

    if(req.params.categoria === 'cocteleria') {
        Cocteleria.findOne({ where: { id: req.params.id } })
        .then(coctel => {
            const nuevoStock = !(coctel.stock);
            coctel.stock = nuevoStock;
            coctel.save();
            return res.json({realizado: 'exito'})
        })
        .catch(error => {
            return res.status(500).json({realizado: 'error', error})
        })
    } else if (req.params.categoria === 'platos') {
        Platos.findOne({ where: { id: req.params.id } })
        .then(plato => {
            const nuevoStock = !(plato.stock);
            plato.stock = nuevoStock;
            plato.save();
            return res.json({realizado: 'exito'})
        })
        .catch(error => {
            return res.status(500).json({realizado: 'error', error})
        })
    } else if (req.params.categoria === 'vinos') {
        Vinos.findOne({ where: { id: req.params.id } })
        .then(vinos => {
            const nuevoStock = !(vinos.stock);
            vinos.stock = nuevoStock;
            vinos.save();
            return res.json({realizado: 'exito'})
        })
        .catch(error => {
            return res.status(500).json({realizado: 'error', error})
        })
    }
}

exports.estadisticasGenerales = async (req, res) => {
    const totalCocteleria = await Cocteleria.count();
    const totalVinos = await Vinos.count();
    const totalPlatos = await Platos.count();

    const totalCocteleriaOcultos = await Cocteleria.count({where: {visible: false}});
    const totalVinosOcultos = await Vinos.count({where: {visible: false}});
    const totalPlatosOcultos = await Platos.count({where: {visible: false}});
    
    const estadisticas = {
        totalCocteleria,
        totalVinos,
        totalPlatos,
        totalCocteleriaOcultos,
        totalVinosOcultos,
        totalPlatosOcultos,
        totalOcultos: totalPlatosOcultos + totalCocteleriaOcultos + totalVinosOcultos
    }

    res.send(estadisticas);
}

exports.contenidosOcultos = async (req, res) => {
    const ocultosCocteleria = Cocteleria.findAll({where: {visible: false} });
    const ocultosPlatos = Platos.findAll({where: {visible: false} });
    const ocultosVinos = Vinos.findAll({where: {visible: false} });

    const todo = {ocultosCocteleria, ocultosPlatos, ocultosVinos}

    res.send(todo);
}
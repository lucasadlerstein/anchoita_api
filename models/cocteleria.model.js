module.exports = (sequelize, Sequelize) => {
    const Cocteleria = sequelize.define("cocteleria", {
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.TEXT
        },
        precio: {
            type: Sequelize.BIGINT(10)
        },
        categoria: {
            type: Sequelize.STRING(100)
        },
        categoria2: {
            type: Sequelize.STRING(100)
        },
        cristaleria: {
            type: Sequelize.STRING
        },
        origen: {
            type: Sequelize.STRING(150)  
        },
        medida: {
            type: Sequelize.BIGINT(10)
        },
        en_nombre: {
            type: Sequelize.STRING
        },
        en_descripcion: {
            type: Sequelize.TEXT
        },
        stock: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        visible: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    });

    return Cocteleria;
};
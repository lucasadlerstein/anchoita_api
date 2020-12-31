module.exports = (sequelize, Sequelize) => {
    const Cocteleria = sequelize.define("cocteleria", {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descripcion: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        precio: {
            type: Sequelize.BIGINT(10),
            allowNull: false
        },
        categoria: {
            type: Sequelize.STRING(100),
            allowNull: false
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
            type: Sequelize.STRING,
            allowNull: false
        },
        en_descripcion: {
            type: Sequelize.TEXT,
            allowNull: false
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
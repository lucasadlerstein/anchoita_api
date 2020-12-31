module.exports = (sequelize, Sequelize) => {
    const Platos = sequelize.define("platos", {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descripcion: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        precio: {
            type: Sequelize.BIGINT(10)
        },
        vegano: {
            type: Sequelize.BOOLEAN
        },
        vegetariano: {
            type: Sequelize.BOOLEAN,
        },
        celiaco: {
            type: Sequelize.BOOLEAN,
        },
        picante: {
            type: Sequelize.BOOLEAN,
        },
        destacado: {
            type: Sequelize.BOOLEAN,
        },
        categoria: {
            type: Sequelize.STRING(50),
            allowNull: false
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
        },
        visible: {
            type: Sequelize.BOOLEAN,
        }
    });

    return Platos;
};
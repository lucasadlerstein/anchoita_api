module.exports = (sequelize, Sequelize) => {
    const Platos = sequelize.define("platos", {
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.TEXT
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
            type: Sequelize.STRING(50)
        },
        en_nombre: {
            type: Sequelize.STRING
        },
        en_descripcion: {
            type: Sequelize.TEXT
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
module.exports = (sequelize, Sequelize) => {
    const Vinos = sequelize.define("vinos", {
        nombre: {
            type: Sequelize.STRING
        },
        anada: {
            type: Sequelize.BIGINT(10)
        },
        bodega: {
            type: Sequelize.TEXT
        },
        precio: {
            type: Sequelize.BIGINT(10)
        },
        vinedo: {
            type: Sequelize.STRING
        },
        pais: {
            type: Sequelize.STRING
        },
        region: {
            type: Sequelize.STRING
        },
        tipo: {
            type: Sequelize.STRING
        },
        uva: {
            type: Sequelize.STRING
        },
        copa: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        t375: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        t500: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        t750: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        t1125: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        t1500: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        t3000: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        c140: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        c120: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        c70: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        c35: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        en_nombre: {
            type: Sequelize.STRING
        },
        stock: {
            type: Sequelize.BOOLEAN
        },
        visible: {
            type: Sequelize.BOOLEAN
        }
    });

    return Vinos;
};
module.exports = (sequelize, Sequelize) => {
    const Vinos = sequelize.define("vinos", {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        anada: {
            type: Sequelize.BIGINT(10)
        },
        bodega: {
            type: Sequelize.TEXT
        },
        precio: {
            type: Sequelize.BIGINT(10),
            allowNull: false
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
            type: Sequelize.STRING,
            allowNull: false
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
        en_nombre: {
            type: Sequelize.STRING,
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

    return Vinos;
};
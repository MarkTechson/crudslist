module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define('Item', {
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        category: DataTypes.STRING
    });

    return Item;
};

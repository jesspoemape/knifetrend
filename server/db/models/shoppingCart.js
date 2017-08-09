module.exports = (sequelize, DataTypes) => {

  const ShoppingCart = sequelize.define("ShoppingCart", {
    active: DataTypes.BOOLEAN,
  })

  ShoppingCart.associate = (models => {
    ShoppingCart.belongsTo(models.User)
    ShoppingCart.hasMany(models.ShoppingCartLineItem, { as: 'items' })
  })

  return ShoppingCart;
}
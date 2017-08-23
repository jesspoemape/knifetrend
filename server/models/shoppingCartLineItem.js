module.exports = (sequelize, DataTypes) => {

  const ShoppingCartLineItem = sequelize.define("ShoppingCartLineItem", {
    quantity: DataTypes.INTEGER,
    purchaseDate: DataTypes.DATE,
    removeDate: DataTypes.DATE
  })

  ShoppingCartLineItem.associate = (models => {
    ShoppingCartLineItem.belongsTo(models.Item)
    ShoppingCartLineItem.belongsTo(models.ShoppingCart)
  })

  return ShoppingCartLineItem;
}
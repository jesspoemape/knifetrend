module.exports = (sequelize, DataTypes) => {

  const OrderLineItem = sequelize.define("OrderLineItem", {
    quantity: DataTypes.INTEGER,
    salePrice: DataTypes.DECIMAL
  })

  OrderLineItem.associate = (models => {
    OrderLineItem.belongsTo(models.Order)
    OrderLineItem.belongsTo(models.Item)
  })

  return OrderLineItem;
}
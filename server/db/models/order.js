module.exports = (sequelize, DataTypes) => {

  const Order = sequelize.define("Order", {
    orderDate: DataTypes.DATE,
    shippingPrice: DataTypes.DECIMAL,
    tax: DataTypes.DECIMAL
  })

  Order.associate = (models => {
    Order.belongsTo(models.User);
    Order.hasMany(models.OrderLineItem, { as: 'items' });
  })

  return Order;
}
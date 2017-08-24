module.exports = (sequelize, DataTypes) => {

  const Order = sequelize.define("Order", {
    orderDate: DataTypes.DATE,
    shippingPrice: DataTypes.DECIMAL,
    tax: DataTypes.DECIMAL
  })

  Order.associate = (models => {
    Order.User = Order.belongsTo(models.User);
    Order.LineItems = Order.hasMany(models.OrderLineItem, { as: 'lineItems' });
  })

  Order.prototype.calcSubtotal = async function() {
    const lineItems = await this.getLineItems()
    console.log(lineItems)
    this.subtotal = lineItems.reduce((acc,lineItem) => {
      return acc + (lineItem.price * lineItem.quanitity)
    },0)
  }

  return Order;
}

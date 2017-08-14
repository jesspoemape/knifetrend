module.exports = (sequelize, DataTypes) => {

  const Order = sequelize.define("Order", {
    orderDate: DataTypes.DATE,
    shippingPrice: DataTypes.DECIMAL,
    tax: DataTypes.DECIMAL
  })

  Order.associate = (models => {
    Order.belongsTo(models.User);
    Order.hasMany(models.OrderLineItem, { as: 'lineItems' });
  })

  Order.prototype.process = async function(shoppingCartLineItems) {
    shoppingCartLineItems.forEach(_addLineItemFromShoppingCart(shoppingCartLineItem))
    this.shippingPrice = this._getShippingRate();
    this.tax = this.calcSubtotal() * this._getTaxRate();
    this.save()
  }

  Order.prototype.calcSubtotal = async function() {
    const lineItems = await this.getLineItems()
    this.subtotal = lineItems.reduce((acc,lineItem) => {
      return acc + (lineItem.price * lineItem.quanitity)
    },0)
  }

  Order.prototype._getShippingRate = function() {
    return 10
  }

  Order.prototype._getTaxRate = function() {
    return .065
  }

  Order.prototype._addLineItemFromShoppingCart = async function(shoppingCartLineItem) {
    let item = await shoppingCartLineItem.getItem()
    // validate available qty here 
    item.quantity = item.quantity - shoppingCartLineItem.quantity
    await item.save();
    let orderLineItem = await this.createLineItem({
      ItemId: item.id,
      salePrice: item.price,
      quanitity: shoppingCartLineItem.quantity
    })
  }

  return Order;
}
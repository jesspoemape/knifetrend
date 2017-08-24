const { createCharge } = require('./../services/stripe');

module.exports = (sequelize, DataTypes) => {

  const ShoppingCart = sequelize.define("ShoppingCart")

  ShoppingCart.associate = (models => {
    ShoppingCart.belongsTo(models.User)
    ShoppingCart.hasMany(models.ShoppingCartLineItem, { as: 'items' })
  })

  ShoppingCart.prototype.updateLineItem = async function(ItemId, quantity, viewer) {
    const lineItem = await this.getOneLineItem({where: {ItemId}});
    lineItem.update({quantity})
    return lineItem;
  }

  ShoppingCart.prototype.addLineItem = async function(ItemId, quantity, viewer) {
    const newItem = await this.createItem({ItemId, quantity});
    return newItem;
  }

  ShoppingCart.prototype.deleteLineItem = async function(ItemId, viewer){
    const lineItem = await this.getOneLineItem({where: {ItemId}});
    lineItem.destroy();
    return this
  }

  ShoppingCart.prototype.emptyCart = async function() {
    const lineItems = await this.getItems()
    lineItems.forEach(lineItem => lineItem.destroy())
    return this
  }

  ShoppingCart.prototype.getOneLineItem = async function(options) {
    const lineItems = await this.getItems(options)
    return lineItems[0]
  }

  ShoppingCart.prototype.getQtyInCart = async function() {
    const lineItems = await this.getItems();
    return lineItems.reduce((acc, lineItem) => {
      return acc + lineItem.quantity
    }, 0)
  }

  ShoppingCart.prototype.confirmCheckout = async function(token, viewer) {
    const order = await viewer.createOrder();
    const shoppingCartLineItems = await this.getItems();
    await order.process(shoppingCartLineItems);
    createCharge(token, order.total)
    return order;
  }

  return ShoppingCart;
}

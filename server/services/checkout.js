const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

class Checkout {

  constructor(token, db, userId) {
    this.db = db;
    this.userId = userId
    this.token = token
    this.shipping = 12.87;
    this.taxRate = .065;
  }

  async complete() {
    await this.loadCart()
    await this.buildOrder()
    await this.createOrder()
    await this.updateInventory()
    await this.emptyCart()
    // await this.processPayment()
  }

  async loadCart() {
    this.shoppingCart = await this.db.ShoppingCart.findOne({
      where:{UserId: this.userId},
      include: [{
        model: this.db.ShoppingCartLineItem,
        as: 'items',
        include: [{ model: this.db.Item }]
      }]
    })
  }

  async buildOrder() {
    this.orderLineItems = this.shoppingCart.items.map(lineItem => {
      return {
        ItemId: lineItem.Item.id,
        salePrice: lineItem.Item.price,
        quantity: lineItem.quantity
      }
    })

    this.subtotal = this.orderLineItems.reduce((acc, lineItem) => {
      return acc + lineItem.quantity * lineItem.salePrice
    }, 0)

    this.tax = this.subtotal * this.taxRate
  }

  async createOrder() {
    const order = await this.db.Order.create(
      {
        UserId: this.userId,
        orderDate: new Date(),
        shippingPrice: this.shipping,
        tax: this.tax,
        lineItems: this.orderLineItems
      },
      {
        include: [ this.db.Order.LineItems ]
      }
    )
  }

  async updateInventory() {
    await this.shoppingCart.items.forEach(lineItem => {
      lineItem.Item.quantity = lineItem.Item.quantity - lineItem.quantity
      lineItem.Item.save()
    })
  }

  async emptyCart() {
    const deleteCount = await this.db.ShoppingCartLineItem.destroy({
      where: { ShoppingCartId: this.shoppingCart.id }
    })
  }

  async processPayment() {
    console.log('processing payment')
    const charge = stripe.charges.create({
      amount: Math.floor((this.subtotal + this.tax + this.shipping)*100),
      currency: "usd",
      description: "Knifetrend.com Purchase",
      source: this.token
    }, (err, charge) => {
      console.log('charge: ', charge)
      console.log('err: ', err)
    })
  }
}

module.exports = async function(req, res) {
  console.log('checkout endpoint', req.body.token)
  // if (!req.viewer) return null;
  const checkout = new Checkout(req.body.token, req.db, 1)
  await checkout.complete();
  res.status(200).send("im back");
}

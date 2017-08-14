const typeDef = `
  type Order {
    id: Int!
    orderDate: String
    shippingPrice: Float
    tax: Float
    subtotal: Int
    user: User!
    lineItems: [OrderLineItem]!
  }
`
const resolvers = {
  subtotal(order, args, context) {
    return order.calcSubtotal()
  },
  user(order, args, context) {
    return order.getUser();
  },
  lineItems(order, args, context) {
    return order.getLineItems();
  }
}

module.exports = {
  typeDef,
  resolvers
}

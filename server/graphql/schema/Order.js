const typeDef = `
  type Order {
    id: Int!
    orderDate: String
    shippingPrice: Float
    tax: Float
    user: User!
    lineItems: [OrderLineItem]!
  }
`
const resolvers = {
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

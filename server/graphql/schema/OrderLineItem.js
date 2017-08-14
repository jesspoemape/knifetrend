const typeDef = `
  type OrderLineItem {
    id: Int!
    quantity: Int
    salePrice: Float
    order: Order
    item: Item
  }
`
const resolvers = {
  order(orderLineItem, args, context) {
    return orderLineItem.getOrder();
  },
  item(orderLineItem, args, context) {
    return orderLineItem.getItem();
  }
}

module.exports = {
  typeDef,
  resolvers
}

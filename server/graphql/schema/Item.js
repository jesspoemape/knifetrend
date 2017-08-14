const typeDef = `
  type Item {
    id: Int!
    name: String
    desc: String
    price: Float
    quantity: Int
    primaryPhoto: String
    otherMedia: [String]
    isUnique: Boolean
    maker: Maker!
    design: Design
    orders: [Order]
  }
`
const resolvers = {
  maker(item, args, context) {
    return item.getMaker();
  },
  design(item, args, context) {
    return item.getDesign();
  },
  async orders(item, args, context) {
    const orders = await context.db.Order.findAll({
      include: [{
        model: context.db.OrderLineItem,
        as: "lineItems",
        where: {ItemId: item.id}
      }]
    })
    return orders.map(order => order.get())
  }
}

module.exports = {
  typeDef,
  resolvers
}

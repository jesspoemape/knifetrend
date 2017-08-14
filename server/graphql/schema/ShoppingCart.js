const typeDef = `
  type ShoppingCart {
    id: Int!
    active: Boolean
    user: User
    lineItems: [ShoppingCartLineItem]
  }
`
const resolvers = {
  user(shoppingCart, args, context) {
    return shoppingCart.getUser();
  },
  lineItems(shoppingCart, args, context) {
    return shoppingCart.getItems();
  }
}

module.exports = {
  typeDef,
  resolvers
}

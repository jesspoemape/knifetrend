const typeDef = `
  type ShoppingCart {
    id: Int!
    user: User
    itemCountInCart: Int
    lineItems: [ShoppingCartLineItem]
  }
`
const resolvers = {
  user(shoppingCart, args, context) {
    return shoppingCart.getUser();
  },
  lineItems(shoppingCart, args, context) {
    return shoppingCart.getItems();
  },
  itemCountInCart()
}

module.exports = {
  typeDef,
  resolvers
}

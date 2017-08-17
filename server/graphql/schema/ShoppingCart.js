const typeDef = `
  type ShoppingCart {
    id: Int!
    user: User
    lineItems: [ShoppingCartLineItem]
    totalItemQuantity: Int
  }
`
const resolvers = {
  user(shoppingCart, args, context) {
    return shoppingCart.getUser();
  },
  lineItems(shoppingCart, args, context) {
    return shoppingCart.getItems();
  },
  totalItemQuantity(shoppingCart, args, context) {
    return shoppingCart.getQtyInCart();
  }
}

module.exports = {
  typeDef,
  resolvers
}

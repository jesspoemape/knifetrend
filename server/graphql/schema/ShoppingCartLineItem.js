const typeDef = `
  type ShoppingCartLineItem {
    id: Int!
    quantity: Int
    purchaseDate: String
    removeDate: String
    shoppingCart: ShoppingCart
    item: Item
  }
`
const resolvers = {
  shoppingCart(lineItem, args, context) {
    return lineItem.getShoppingCart();
  },
  item(lineItem, args, context) {
    return lineItem.getItem()
  }
}

module.exports = {
  typeDef,
  resolvers
}

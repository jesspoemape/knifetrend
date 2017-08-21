const typeDef = `
  type User {
    id: Int!
    name: String
    username: String
    email: String
    avatar: String
    userJoinDate: String
    auth_id: String
    auth_provider: String
    isAdmin: Boolean
    designs: [Design]
    entries: [Entry]
    orders: [Order]
    shoppingCart: ShoppingCart
  }
`
const resolvers = {
  designs(user, args, context) {
    return user.getDesigns();
  },
  entries(user, args, context) {
    return user.getEntries();
  },
  orders(user, args, context) {
    return user.getOrders();
  },
  shoppingCart(user, args, context) {
    return user.getShoppingCart();
  }
}

module.exports = {
  typeDef,
  resolvers
}

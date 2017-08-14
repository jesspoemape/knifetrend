const { findAll, findOne, getSignedInUser } = require('./../connectors/db-connector');

const typeDef = `
  type Mutation {
    vote(EntryId: Int!): Entry
    comment(EntryId: Int!, text: String!): Entry
    addToCart(ItemId: Int!, quantity: Int!): ShoppingCartLineItem
    updateCartQuantity(ItemId: Int!, newQuantity: Int!): ShoppingCartLineItem
    removeFromCart(ItemId: Int!): ShoppingCart
    emptyCart: ShoppingCart
  }
`
const resolvers = {
  async vote(obj, args, { viewer, db }) {
    const vote = await db.Vote.saveOrChange(args.EntryId, viewer)
    return await vote.getEntry();
  },
  async comment(obj, args, { viewer, db }) {
    const comment = await db.Comment.createOrUpdate(args.EntryId, args.text, viewer)
    return await comment.getComment();
  },
  async updateCartQuantity(obj, args, { viewer }) {
    if (!viewer) return null;
    const cart = await viewer.getShoppingCart()
    return await cart.updateLineItem(args.ItemId, args.newQuantity, viewer)
  },
  async addToCart(obj, args, { viewer }){
    if (!viewer) return null;
    const cart = await viewer.getShoppingCart()
    return await cart.addLineItem(args.ItemId, args.quantity, viewer)
  },
  async removeFromCart(obj, args, { viewer }) {
    if (!viewer) return null;
    const cart = await viewer.getShoppingCart()
    return await cart.deleteLineItem(args.ItemId, viewer)
  },
  async emptyCart(obj, args, { viewer }) {
    if (!viewer) return null;
    const cart = await viewer.getShoppingCart()
    return await cart.emptyCart()
  }
}

module.exports = {
  typeDef,
  resolvers
}

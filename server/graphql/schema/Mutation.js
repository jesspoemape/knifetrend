const { findAll, findOne, getSignedInUser } = require('./../connectors/db-connector');

const typeDef = `
  type Mutation {
    vote(EntryId: Int!): Entry
    comment(EntryId: Int!, text: String!): Entry
    addCartItem(ItemId: Int!, quantity: Int!): ShoppingCartLineItem
    updateCartItemQuantity(ItemId: Int!, newQuantity: Int!): ShoppingCartLineItem
    deleteCartItem(ItemId: Int!): ShoppingCart
  }
`
const resolvers = {
  async vote(obj, args, context) {
    const vote = await context.db.Vote.saveOrChange(args.EntryId, context.viewer)
    return await vote.getEntry();
  },
  async comment(obj, args, context) {
    const comment = await context.db.Comment.createOrUpdate(args.EntryId, args.text, context.viewer)
    return await comment.getComment();
  },
  async updateCartItemQuantity(obj, args, context) {
    if (!context.viewer) return null;
    const cart = await context.viewer.getShoppingCart()
    return await cart.updateLineItem(args.ItemId, args.newQuantity, context.viewer)
  },
  async addCartItem(obj, args, context){
    if (!context.viewer) return null;
    const cart = await context.viewer.getShoppingCart()
    return await cart.addLineItem(args.ItemId, args.quantity, context.viewer)
  },
  async deleteCartItem(obj, args, context) {
    if (!context.viewer) return null;
    const cart = await context.viewer.getShoppingCart()
    return await cart.deleteLineItem(args.ItemId, context.viewer)
  }
}

module.exports = {
  typeDef,
  resolvers
}

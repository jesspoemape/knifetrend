const { findAll, findOne, getSignedInUser } = require('./../connectors/db-connector');

const typeDef = `
  type Mutation {
    vote(EntryId: Int!): Entry
    comment(EntryId: Int!, text: String!): Entry
    addToCart(ItemId: Int!, quantity: Int!): ShoppingCartLineItem
    updateCartQuantity(ItemId: Int!, newQuantity: Int!): ShoppingCartLineItem
    removeFromCart(ItemId: Int!): User
    emptyCart: ShoppingCart
    confirmCheckout: Order
  }
`
const resolvers = {
  async vote(obj, args, { viewer, db }) {
    const vote = await db.Vote.saveOrChange(args.EntryId, viewer)
    return await vote.getEntry();
  },
  async comment(obj, args, { viewer, db }) {
    const comment = await db.Comment.createOrUpdate(args.EntryId, args.text, viewer)
    return await db.Entry.findOne({where:{id:comment.EntryId}})
  },
  async updateCartQuantity(obj, args, { viewer }) {
    if (!viewer) return null;
    return await viewer.ShoppingCart.updateLineItem(args.ItemId, args.newQuantity, viewer)
  },
  async addToCart(obj, args, { viewer }){
    if (!viewer) return null;
    return await viewer.ShoppingCart.addLineItem(args.ItemId, args.quantity, viewer)
  },
  async removeFromCart(obj, args, { viewer }) {
    if (!viewer) return null;
    await viewer.ShoppingCart.deleteLineItem(args.ItemId, viewer)
    return viewer
  },
  async emptyCart(obj, args, { viewer }) {
    if (!viewer) return null;
    return await viewer.ShoppingCart.emptyCart()
  },
  async confirmCheckout(obj, args, { viewer }) {
    if (!viewer) return null;
    return await viewer.ShoppingCart.confirmCheckout();
  }
}

module.exports = {
  typeDef,
  resolvers
}

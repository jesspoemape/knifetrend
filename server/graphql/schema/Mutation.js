const { findAll, findOne, getSignedInUser } = require('./../connectors/db-connector');

const typeDef = `
  type Mutation {
    vote(EntryId: Int!): Entry
    comment(EntryId: Int!, text: String!): Entry
    addToCart(ItemId: Int!, quantity: Int!): ShoppingCartLineItem
    updateCartQuantity(ItemId: Int!, newQuantity: Int!): User
    removeFromCart(ItemId: Int!): User
    emptyCart: ShoppingCart
    submitEntry(input: EntryInput): Entry
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
    await viewer.ShoppingCart.updateLineItem(args.ItemId, args.newQuantity, viewer)
    return viewer
  },

  async addToCart(obj, args, { viewer }){
    if (!viewer) return null;
    await viewer.ShoppingCart.addLineItem(args.ItemId, args.quantity, viewer)
    return viewer
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

  async submitEntry(obj, {input}, { viewer, db }) {
    if(!viewer) return null;
    return await db.Entry.addNewEntry(input, viewer);
  }

}

module.exports = {
  typeDef,
  resolvers
}

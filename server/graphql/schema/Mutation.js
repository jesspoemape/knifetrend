const { findAll, findOne, getSignedInUser } = require('./../connectors/db-connector');

const typeDef = `
  type Mutation {
    vote(EntryId: Int!): Entry
    comment(EntryId: Int!, text: String!): Entry
  }
`
const resolvers = {
  async vote(obj, args, context) {
    const vote = await context.db.Vote.saveOrChange(args.EntryId, context.viewer)
    return await vote.getEntry();
  },
  async comment(obj, args, context) {
    const comment = await context.db.Comment.createOrUpdate(args.EntryId, args.text, context.viewer)
    return await vote.getComment();
  }
}

module.exports = {
  typeDef,
  resolvers
}

const typeDef = `
  type Vote {
    id: Int!
    createdAt: String
    active: Boolean
    user: User
    entry: Entry
  }
`
const resolvers = {
  user(vote, args, context) {
    return vote.getUser();
  },
  entry(vote, args, context) {
    return vote.getEntry();
  }
}

module.exports = {
  typeDef,
  resolvers
}

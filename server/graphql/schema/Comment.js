const typeDef = `
  type Comment {
    id: Int!
    content: String!
    createdAt: String
    updatedAt: String
    user: User
    entry: Entry
  }
`
const resolvers = {
  user(comment, args, context) {
    return comment.getUser();
  },
  entry(vote, args, context) {
    return comment.getEntry();
  }
}

module.exports = {
  typeDef,
  resolvers
}

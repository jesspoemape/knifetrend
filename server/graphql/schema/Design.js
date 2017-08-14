const typeDef = `
  type Design {
    id: Int!
    name: String!
    desc: String
    primaryPhoto: String
    otherMedia: [String]
    user: User
    entries: [Entry]
    item: Item
  }
`
const resolvers = {
  user(design, args, context) {
    return design.getUser();
  },
  entries(design, args, context) {
    return design.getEntries();
  },
  item(design, args, context) {
    return design.getItem();
  }
}

module.exports = {
  typeDef,
  resolvers
}

const { findAll, findOne, getSignedInUser } = require('./../connectors/db-connector');

const typeDef = `
  type Query {
    competition(id: Int!): Competition
    competitions: [Competition]
    entry(id: Int!): Entry
    entries: [Entry]
    users: [User]
    viewer: User
    makers: [Maker]
    items: [Item]
  }
`
const resolvers = {
  competition(obj, args, context) {
    return findOne('Competition', args);
  },
  competitions(obj, args, context) {
    return findAll('Competition', args);
  },
  entry(obj, args, context) {
    return findOne('Entry', args);
  },
  entries(obj, args, context) {
    return findAll('Entry', args);
  },
  viewer(obj, args, context) {
    return getSignedInUser(context);
  } ,
  users(obj, args, context) {
    return findAll('User', args);
  },
  makers(obj, args, context) {
    return findAll('Maker', args);
  },
  items(obj, args, context) {
    return findAll('Item', args);
  }
}

module.exports = {
  typeDef,
  resolvers
}

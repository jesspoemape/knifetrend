const { findAll, findOne, getSignedInUser } = require('./../connectors/db-connector');

const typeDef = `
  type Query {
    competition(id: Int!): Competition
    competitions: [Competition]
    entry(id: Int!): Entry
    entries: [Entry]
    users: [User]
    viewer: User
    makers(storeName: String): [Maker]
    items(name: String, makerId: Int): [Item]
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
    return context.viewer;
  } ,
  users(obj, args, context) {
    return findAll('User', args);
  },
  makers(obj, args, context) {
    if (args.storeName) {
      return context.db.Maker.findAll({ where: { storeName: { $iLike: `%${args.storeName}%`} } })
    }
    return findAll('Maker');
  },
  items(obj, args, context) {
    if (args.makerId) {
      return context.db.Item.findAll({ where: { name: { $iLike: `%${args.name}%`},  MakerId: args.makerId  } })
    } else if (args.name) {
      return context.db.Item.findAll({ where: { $or: [{ name: { $iLike: `%${args.name}%`} }, { desc: { $iLike: `%${args.name}%`} } ] }})
    }
    return findAll('Item');
  }
}

module.exports = {
  typeDef,
  resolvers
}

const typeDef = `
  type Maker {
    id: Int!
    makerJoinDate: String
    biography: String
    logo: String
    coverPhoto: String
    profilePhoto: String
    location: String
    storeName: String
    user: User!
    items(limit: Int): [Item]
  }
`
const resolvers = {
  user(maker, args, context) {
    return maker.getUser();
  },
  items(maker, args, context) {
    return maker.getItems({limit:args.limit})
  },
  async profilePhoto(maker, args, context) {
    if(maker.profilePhoto) {
      return maker.profilePhoto
    } else {
      const user = await maker.getUser();
      return user.avatar
    }
  },
  async storeName(maker, args, context) {
    if(maker.storeName) {
      return maker.storeName
    } else {
      const user = await maker.getUser();
      return `${user.name}'s Store`
    }
  }
}

module.exports = {
  typeDef,
  resolvers
}

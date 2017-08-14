const typeDef = `
  type Competition {
    id: Int!
    name: String
    primaryPhoto: String
    shortDesc: String
    desc: String
    award: String
    awardValue: Int
    terms: String
    startDate: String
    endDate: String
    entries: [Entry]
  }
`
const resolvers = {
  entries(competition, args, context) {
    return competition.getEntries();
  }
}

module.exports = {
  typeDef,
  resolvers
}

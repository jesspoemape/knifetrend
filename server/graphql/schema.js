module.exports = `

  type User {
    id: Int!
    name: String
    username: String
    avatar: String
    auth_id: String
    auth_provider: String
    storeName: String
    entries: [Entry]
  }

  type Entry {
    id: Int!
    name: String!
    desc: String
    imgUrl: String
    competition: Competition
    user: User
    votes: [Vote]
    totalVotes: Int
    viewerVote: Boolean
    comments: [Comment]
  }

  type Competition {
    id: Int!
    name: String
    imgUrl: String
    shortDesc: String
    desc: String
    award: String
    awardValue: Int
    endDate: String
    entries: [Entry]
  }

  type Comment {
    id: Int!
    text: String!
    user: User
    entry: Entry
    createdAt: String
    updatedAt: String
  }

  type Vote {
    id: Int!
    createdAt: String
    user: User
    entry: Entry
  }

  type Query {
    competition(id: Int!): Competition
    competitions: [Competition]
    entry(id: Int!): Entry
    entries: [Entry]
    viewer: User
  }

  type Mutation {
    vote(EntryId: Int!): Entry
    comment(EntryId: Int!, text: String!): Entry
  }

`

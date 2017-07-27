const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `

  type User {
    id: Int!
    name: String
    username: String
    avatar: String
    auth_id: String
    auth_provider: String
    entries: [Entry]
  }

  type Entry {
    id: Int!
    name: String!
    desc: String
    imgUrl: String
    competition: Competition
    user: User
  }

  type Competition {
    id: Int!
    name: String
    imgUrl: String
    desc: String
    award: String
    awardValue: Int
    endDate: String
    entries: [Entry]
  }

  type Query {
    competition(id: Int!): Competition
    competitions: [Competition]
    entry(id: Int!): Entry
    entries: [Entry]
    viewer: User
  }

`

const resolvers = {
  Query: {
    competition(obj, args, context, info) {
      return context.db.Competition.findOne({ where: args })
      .then(competition => competition.get())
    },
    competitions(obj, args, context, info) {
      return context.db.Competition.findAll()
      .then(competitions => {
        return competitions.map(competition => competition.get())
      });
    },
    entry(obj, args, context, info) {
      return context.db.Entry.findOne({ where: args })
      .then(entry => entry.get())
    },
    entries(obj, args, context, info) {
      return context.db.Entry.findAll()
      .then(entries => entries.map(entry => entry.get()));
    },
    viewer(obj, args, context, info) {
      return context.db.User.findOne({
        where : { auth_id: context.user ? context.user.identities[0].user_id : null }
      }).then(user => user.get()).catch(() => {})
    }
  },
  User: {
    entries(user, args, context, info) {
      return context.db.Entry.findAll({where:{ UserId: user.id }})
      .then(entries => entries.map(entry => entry.get()));
    }
  },
  Competition: {
    entries(competition, args, context, info) {
      return context.db.Entry.findAll({where:{ CompetitionId: competition.id }})
      .then(entries => entries.map(entry => entry.get()));
    }
  },
  Entry: {
    competition(entry, args, context, info) {
      return context.db.Competition.findOne({where:{ id: entry.CompetitionId}})
      .then(competition => competition.get())
    },
    user(entry, args, context, info) {
      return context.db.User.findOne({where:{id: entry.UserId}})
      .then(user => user.get())
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = {
  schema
}

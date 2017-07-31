const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `

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

import db from './../db/models/index';

async function findAll(model, filter) {
  const list = await db[model].findAll({where:filter})
  return list.map(instance => instance.get())
}
async function findOne(model, filter) {
  const instance = await db[model].findAll({where:filter})
  return instance.get()
}



const resolvers = {
  Query: {
    async competition(obj, args, context, info) {
      const competition = await context.db.Competition.findOne({ where: args })
      return competition.get();
    },
    competitions(obj, args, context, info) {
      return findAll('Competition', args);
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
  Mutation: {
    async vote(obj, args, context, info) {
      const auth_id = context.user ? context.user.identities[0].user_id : null
      let viewer = await context.db.User.findOne({where:{auth_id:auth_id}})
      if(!viewer){
        return null
      }
      const UserId = viewer.id
      const vote = await context.db.Vote.findOne({where:{UserId: UserId, EntryId: args.EntryId}})
      if(vote) {
        vote.active = !vote.active
        await vote.save()
      } else {
        await context.db.Vote.create({
          active: true,
          UserId: UserId,
          EntryId: args.EntryId
        })
      }
      const entry = await context.db.Entry.findOne({ where:{id:args.EntryId}})
      return entry.get()
    },
    async comment(obj, args, context, info) {
      const auth_id = context.user ? context.user.identities[0].user_id : null
      let viewer = await context.db.User.findOne({where:{auth_id:auth_id}})
      if(!viewer){
        return null
      }
      const UserId = viewer.id

      await context.db.Comment.create({
        text: args.text,
        UserId: UserId,
        EntryId: args.EntryId
      })
      const entry = await context.db.Entry.findOne({ where:{id:args.EntryId}})
      return entry.get()
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
    },
    comments(entry, args, context, info) {
      return context.db.Comment.findAll({where:{ EntryId: entry.id }})
      .then(comments => comments.map(comment => comment.get()));
    },
    votes(entry, args, context, info) {
      return context.db.Vote.findAll({where:{ EntryId: entry.id, active:true }})
      .then(votes => votes.map(vote => vote.get()));
    },
    totalVotes(entry, args, context, info) {
      return context.db.Vote.findAll({where:{ EntryId: entry.id , active:true}})
      .then(votes => votes.length);
    },
    async viewerVote(entry, args, context, info) {
      const auth_id = context.user ? context.user.identities[0].user_id : null
      if(!auth_id){
        return false
      }
      const viewer = await context.db.User.findOne({where:{auth_id:auth_id}})
      const UserId = viewer.id
      const vote = await context.db.Vote.findOne({where:{EntryId:entry.id, UserId: UserId}})
      if(!vote) {
        return false
      }
      return vote.get().active
    }
  },
  Vote: {
    user(vote, args, context, info) {
      return context.db.User.findOne({where:{id: vote.UserId}})
      .then(user => user.get())
    },
    entry(vote, args, context, info) {
      return context.db.Entry.findOne({where:{id: vote.EntryId}})
      .then(entry => entry.get())
    }
  },
  Comment: {
    user(comment, args, context, info) {
      return context.db.User.findOne({where:{id: comment.UserId}})
      .then(user => user.get())
    },
    entry(vote, args, context, info) {
      return context.db.Entry.findOne({where:{id: comment.EntryId}})
      .then(entry => entry.get())
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

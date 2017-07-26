const { GraphQLSchema, GraphQLInterfaceType,
        GraphQLID, GraphQLObjectType,
        GraphQLString, GraphQLNonNull,
        GraphQLList, GraphQLInt } = require('graphql');
const { resolver } = require('graphql-sequelize');

const db = require('./../db/models/index')

const NodeType = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolveType: () => { }
})

const EntryType = new GraphQLObjectType({
  name: 'Entry',
  interfaces: [ NodeType ],
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    desc: { type: GraphQLString },
    imgUrl: { type: GraphQLString },
    competition: {
      type: CompetitionType,
      resolve: (parent, args, req) => {
        return db.Competition.findOne({
          where: { id: parent.CompetitionId }
        }).then(competition => competition.get())
      }
    }
  })
})

const CompetitionType = new GraphQLObjectType({
  name: 'Competition',
  interfaces: [ NodeType ],
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    imgUrl: { type: GraphQLString },
    desc: { type: GraphQLString },
    award: { type: GraphQLString },
    endDate: { type: GraphQLString },
    entries: {
      type: new GraphQLList(EntryType),
      resolve: (parent, args, req) => (parent.Entries)
    }
  }
})


const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    competition: {
      type: CompetitionType,
      args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
      },
      resolve: (parent, args, req) => {
        return req.db.Competition.findOne({
          where: args,
          include: [ { model: db.Entry, as: 'Entries' } ]
      }).then(competition => competition.get())
      }
    },
    entry: {
      type: EntryType,
      args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
      },
      resolve: (parent, args, req) => {
        return req.db.Entry.findOne({
          where: args,
          include: [ { model: db.Competition, as: 'competition'}]
        }).then(entry => entry.get())
      }
    },
    competitions: {
      type: new GraphQLList(CompetitionType),
      args: {
        name: { type: GraphQLString },
        orderBy: { type: GraphQLString },
        order: { type: GraphQLString }
      },
      resolve: (parent, args, req) => {
        return req.db.Competition.findAll({
          include: [
            { model: db.Entry, as: 'Entries' }
          ]
        }).then(competitions => {
          return competitions.map(competition => competition.get() )
        });
      }
    }
  }
})

const schema = new GraphQLSchema({ query: QueryType })

module.exports = {
  schema
}

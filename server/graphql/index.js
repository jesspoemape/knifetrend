const { GraphQLSchema, GraphQLInterfaceType,
        GraphQLID, GraphQLObjectType,
        GraphQLString, GraphQLNonNull,
        GraphQLList, GraphQLInt } = require('graphql');

const NodeType = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolveType: () => { }
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
    endDate: { type: GraphQLString }
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
        return req.db.Competition.findOne({ where: args }).then(competition => competition.get())
      }
    },
    competitions: {
      type: new GraphQLList(CompetitionType),
      args: { name: { type: GraphQLString } },
      resolve: (parent, args, req) => {
        return req.db.Competition.findAll({ where: args }).then(competitions => {
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

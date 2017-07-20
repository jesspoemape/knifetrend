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

const ContestType = new GraphQLObjectType({
  name: 'Contest',
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
    contest: {
      type: ContestType,
      args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
      },
      resolve: (parent, args, req) => {
        return req.db.Contest.findOne({ where: args }).then(contest => contest.get())
      }
    },
    contests: {
      type: new GraphQLList(ContestType),
      args: { name: { type: GraphQLString } },
      resolve: (parent, args, req) => {
        return req.db.Contest.findAll({ where: args }).then(contests => {
          return contests.map(contest => contest.get() )
        })
      }
    }
  }
})

const schema = new GraphQLSchema({ query: QueryType })

module.exports = {
  schema
}

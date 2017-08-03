const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const mutations = require('./mutations');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: merge(resolvers, mutations)
})

module.exports = {
  schema
}

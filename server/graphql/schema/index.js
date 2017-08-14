const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(module.filename);
const { merge } = require('lodash');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = [];
const resolvers = {}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    let fileModule = require(`./${file}`);
    let typeName =  file.slice(0, -3);
    typeDefs.push(fileModule.typeDef);
    merge(resolvers, {[typeName]: fileModule.resolvers})
  });

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = {
  schema
}

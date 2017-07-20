const express = require('express')
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser')

const db = require('./db/models/index')
const{ schema } = require('./graphql/index')

const app = express();
app.use(bodyParser.json())

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(3001);

const express = require('express')
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db/models/index')
const{ schema } = require('./graphql/index')

const app = express();
app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(3001);

const env = require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

const passport = require('./auth');
const { addDatabase } = require('./middleware');
const{ schema } = require('./graphql/schema');

const port = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(bodyParser.json())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: true,
	saveUninitialized: true
}));
app.use(addDatabase);
app.use(passport.initialize());
app.use(passport.session());

// Endpoints
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback',
  passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/'
  })
);

app.get('/auth/me', (req, res) => {
  !req.user ?
  	res.status(200).send('No one logged in!')
    :
    res.status(200).send(req.user)
});

app.listen(port);

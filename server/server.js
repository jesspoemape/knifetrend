const dotenv = require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

const passport = require('./auth');
const { addDatabase, addViewer } = require('./middleware');
const { schema } = require('./graphql/schema');

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
app.use('/graphql', addViewer, graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.get('/auth', passport.authenticate('auth0'));

app.get('/logout', function(req, res){
  req.logout();
  res.redirect(process.env.REACT_APP_CLIENT_SERVER || '/');
});

app.get('/auth/callback',
  passport.authenticate('auth0', {
    successRedirect: process.env.REACT_APP_CLIENT_SERVER || '/'
  })
);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(`${__dirname}/../build`));
  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/../build/index.html`);
  });
}

app.listen(port);

const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('./models');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5432;

const hbs = exphbs.create({
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, 'views/partials')
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const sessionStore = new SequelizeStore({
  db: sequelize
});

app.use(session({
  secret: process.env.SESSION_SECRET || 'supersecret',
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}));


const routes = require('./routes');
app.use(routes);


sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

require('dotenv').config();


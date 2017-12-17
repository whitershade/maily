const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURL);

const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cookieSession({
    maxAge: 2592000000, // 30 days in milliseconds
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
require('./models/User'); // should be before ./services/passport because passport.js uses models
require('./services/passport');
require('./routes/auth')(app); // should be after all app.use

app.listen(PORT);

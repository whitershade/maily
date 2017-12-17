const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

const app = express();
const PORT = process.env.PORT || 5000;

require('./models/User'); // should be before ./services/passport because passport.js uses models
require('./services/passport');
require('./routes/auth')(app);

mongoose.connect(keys.mongoURL);

app.use(
  cookieSession({
    maxAge: 2592000000, // 30 days in milliseconds
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.listen(PORT);

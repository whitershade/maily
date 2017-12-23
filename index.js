const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURL);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
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

// should be after all app.use
require('./routes/auth')(app);
require('./routes/billing')(app);

app.listen(PORT);

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// should be before ./services/passport because passport.js uses models
require('./models/User');
require('./models/Survey');

require('./services/passport');

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

// routes should be after all app.use
require('./routes/auth')(app);
require('./routes/billing')(app);
require('./routes/survey')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets (main.js and main.css)
  app.use(express.static('client/build'));

  // Express will serve up the index.html file if it doesn't recognize the path
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT);

const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();

require('./services/passport');
require('./routes/auth')(app);

const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURL);
app.listen(PORT);

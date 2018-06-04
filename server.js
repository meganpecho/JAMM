// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');
// Config
const config = require('./server/config');

// MongoDB Connection
mongoose.connect(config.MONGO_URI);
const monDb = mongoose.connection;

monDb.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that', config.MONGO_URI, 'is running.');
});

monDb.once('open', function callback() {
  console.info('Connected to MongoDB:', config.MONGO_URI);
});

// App
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cors());

// Set port
const port = process.env.PORT || '8083';
app.set('port', port);

require('./server/api')(app, config);

// Serve only the static files form the dist directory
// Don't run when NodeJS ENV variable is set to 'dev'
if (process.env.NODE_ENV !== 'dev') {
  app.use(express.static(__dirname + '/dist'));
}

if (process.env.NODE_ENV !== 'dev') {
  app.get('/*', function(req,res) {
      res.sendFile(path.join(__dirname+'/dist/index.html'));
  });
}

// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

// For dev purposes
app.listen(port, () => console.log(`Server running on localhost:${port}`));

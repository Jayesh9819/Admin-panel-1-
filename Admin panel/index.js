// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const firstDbRoutes = require('./routes/firstDbRoutes');
const secondDbRoutes = require('./routes/secondDbRoutes');
const billingRoutes = require('./routes/billingRoutes');
const localInformationRoutes = require('./routes/localInformationRoutes');
const entryOptionRoutes = require('./routes/entryOptionRoutes');
const referenceRoutes = require('./routes/referenceRoutes');
const billingDetailRoutes = require('./routes/billingDetailRoutes');



const app = express();

// Connect to MongoDB databases for user
const firstDbConnection = mongoose.createConnection('mongodb://localhost:27017/fristDb',);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
//for general information
const secondDbConnection = mongoose.createConnection('mongodb://localhost:27017/SecondDb', (err, client) => {
  if (err) {
    console.error('Error occurred while connecting to MongoDB', err);
    return;
  }

  console.log('Connected successfully to server 2');


});
//db for accounting
mongoose.createConnection('mongodb://localhost:27017/accounting', (err, client) => {
  if (err) {
    console.error('Error occurred while connecting to MongoDB', err);
    return;
  }

  console.log('Connected successfully to server 2');


});

//db for order
mongoose.createConnection('mongodb://localhost:27017/accounting', (err, client) => {
  if (err) {
    console.error('Error occurred while connecting to MongoDB', err);
    return;
  }

  console.log('Connected successfully to server 2');


});

//db for Refrence
mongoose.createConnection('mongodb://localhost:27017/references', (err, client) => {
  if (err) {
    console.error('Error occurred while connecting to MongoDB', err);
    return;
  }

  console.log('Connected successfully to server 2');


});



app.use(express.json());



// Configure body-parser
app.use(bodyParser.urlencoded({ extended: false }));

//ROUTES

app.use('/', express.static(__dirname + '/public')); // Serve static files (HTML, CSS, JS)

// Set up routes for the first database
app.use('/firstDb', firstDbRoutes);

// Set up routes for the second database
app.use('/secondDb', secondDbRoutes);

// Set up routes for the accounting database
app.use('/billings', billingRoutes);

// Set up routes for the order db
app.use('/local-information', localInformationRoutes);
app.use('/entry-option', entryOptionRoutes);

//setup route for refrences db
app.use('/references', referenceRoutes);
app.use('/billingdetails', billingDetailRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

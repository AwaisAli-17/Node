const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes")

const app = express();
app.use(express.json());
app.use('/', routes);

const mongoURL = "mongodb+srv://awais:awais123@cluster0.kowt6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(mongoURL,{dbName:'moviedb'});
mongoose.connect(mongoURL,{dbName:'userdb'});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

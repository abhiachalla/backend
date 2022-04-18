const TuitsController = require('./services/tuits-service')
const mongoose = require('mongoose')
const CONNECTION_STRING = "mongodb+srv://abhi:abhi@cluster0.gpijs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_STRING)




const cors = require('cors');
const express = require('express');
const { Mongoose } = require('mongoose');
const app = express(); 
app.use(cors());








app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/', (req, res) => {
    res.send('Please append /api/tuits to this link to see the tuits!');
});
 
require('./services/tuits-service')(app);
require('./services/users-service')(app);


app.listen(process.env.PORT || 4001);

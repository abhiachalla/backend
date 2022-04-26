const TuitsController = require('./services/tuits-service')
const mongoose = require('mongoose')
const CONNECTION_STRING = "mongodb+srv://abhi:abhi@cluster0.gpijs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_STRING)

const helloController = require("./controllers/hello-controller.js");
const userController = require("./controllers/user-controller.js");


const cors = require('cors');
const express = require('express');
const { Mongoose } = require('mongoose');
const app = express(); 
app.use(express.json());

app.use(cors());



helloController(app);
userController(app);




// app.get('/hello', (req, res) => {
//     res.send('Hello World!');
// });

app.get('/', (req, res) => {
    res.send('Please append /api/tuits to this link to see the tuits!');
});
 
require('./services/tuits-service')(app);

// require('./services/users-service')(app);


app.listen(process.env.PORT || 4001);

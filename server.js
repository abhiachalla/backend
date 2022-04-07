
const cors = require('cors');
const express = require('express');
const app = express(); 
app.use(cors());





app.get('/hello', (req, res) => {
    res.send('Hello World!');
});
 
require('./services/tuits-service')(app);


app.listen(process.env.PORT || 4000);


const cors = require('cors');
const express = require('express');
const app = express(); 
app.use(cors());





app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/', (req, res) => {
    res.send('Please append /api/tuits to this link to see the tuits!');
});
 
require('./services/tuits-service')(app);


app.listen(process.env.PORT || 4001);

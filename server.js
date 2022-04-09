
import cors from 'cors';
import express from 'express';
import userController from './services/users-service.js';
import tuitsController from './services/tuits-service.js';

const app = express(); 
app.use(cors());





app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/', (req, res) => {
    res.send('Please append /api/tuits to this link to see the tuits!');
});
 

userController(app);
tuitsController(app);




app.listen(process.env.PORT || 4001);

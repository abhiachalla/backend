let people = require('../data/users');
let users = people;

module.exports = (app) => {
    const findAllUsers = (req, res) => {
        res.json(users);
       }
    const userController = (app) => {
        app.get('/api/users', findAllUsers);
       }
       

};




 






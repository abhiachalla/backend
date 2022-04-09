let people = require('../data/users');
let users = people;

module.exports = (app) => {
    const findAllUsers = (req, res) => {
        res.json(users);
       }
       app.get('/api/users', findAllUsers);
};  




 






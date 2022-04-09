let people = require('../data/users');
let users = people;

const userController = (app) => {
 app.get('/api/users', findAllUsers);
}

const findAllUsers = (req, res) => {
 res.json(users);
}

export default userController;

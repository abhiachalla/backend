const people = require('../data/users.json');
let duppeople = people

module.exports = (app) => {

    const findUsersByType = (type) => {
         duppeople = people.filter(person => person.type===type)
         return duppeople
    }
    
    const findAllUsers = (req, res) => {
        const type = req.query.type;
        if(type) {
          res.json(findUsersByType(type));
          return;
        }
        res.json(people);
       }
    app.get('/api/users', findAllUsers);

    const findUserById = (req, res) => {
        const userId = req.params.uid;
        const user = people.find(u => u._id === userId);
        res.json(user);
       }
       
    app.get('/api/users/:uid', findUserById);
    
       
}
let people = require('../data/users.json');
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


    const createUser = (req, res) => {
        console.log("entered create user");
        const newUser = req.body;
        newUser._id = (new Date()).getTime() + '';
        people.push(newUser);
        res.json(newUser);
       }
       

    app.post('/api/users', createUser);

    const deleteUser = (req, res) => {
        console.log("deleted")
        const userId = req.params['uid'];
        people = people.filter(usr =>
          usr._id !== userId);
        res.sendStatus(200);
       }
       app.delete('/api/users/:uid', deleteUser);       



       const updateUser = (req, res) => {
        const userId = req.params['uid'];
        const updatedUser = req.body;
        people = people.map(usr =>
          usr._id === userId ?
          updatedUser :
          usr);
        res.sendStatus(200);
       }
       app.put('/api/users/:uid', updateUser);       
    
       
}
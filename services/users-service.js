// // let people = require('../data/users.json');
// // let users = people;

// // module.exports = (app) => {
// //     const findAllUsers = (req, res) => {
// //         res.json(users);
// //        }
// //        app.get('/api/users', findAllUsers);
// // };  


// // const userController = (app) => {
// //     app.get('/api/users', findAllUsers);
// //     app.get('/api/users/:uid', findUserById);
// //     app.post('/api/users', createUser);
// //    }
// module.exports = (app) => {
//     app.get('/api/users', findAllUsers);
//     app.get('/api/users/:uid', findUserById);
//     app.post('/api/users', createUser);


//     const createUser = (req, res) => {
//         const newUser = req.body;
//         newUser._id = (new Date()).getTime() + '';
//         users.push(newUser);
//         res.json(newUser);
//        }
       
// };




 






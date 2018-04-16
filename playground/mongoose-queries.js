const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ad4a9a4ec4861702fd89fd0';

// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '5ad061dccfc6dff412cc6964';

if (!ObjectID.isValid(id)){
    console.log('ID not valid');
} else {
    User.findById(id).then((user) => {
        if (!user) {
            return console.log('User not found');
        }
        console.log('User', user);
    });
}
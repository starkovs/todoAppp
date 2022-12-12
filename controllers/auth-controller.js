
const User = require('../models/user');
const createPath = require('../helpers/create-path');

const getUser = (req, res) => {
  User 
    .find()
    .then((tasks) => res.render(createPath('tasks'),{ tasks, title }))
    .catch((error) =>{
      console.log(errorMsg(error));
      res.render(createPath('error'), {title: 'Error'});
    });  
};

module.exports = {
  getUser
}
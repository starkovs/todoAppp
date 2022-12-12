const Task = require('../models/task');
const User = require('../models/user');

const handleError = (res, error) =>{
 res.status(500).send(error.message);
};

const getTasks = (req, res) => {
  User.findById(req.userId).exec((err, user) => {
  if (err) return handleError(res, err)
    Task 
    .find({author: user.username})
    .sort({createdAt: -1})
    .then((tasks) => res.status(200).json(tasks))
    .catch((error) =>{
      return handleError(res, error)
    }); 
  }); 
};

const getTask = (req, res) => {
    User.findById(req.userId).exec((err, user) => {
    if (err) return handleError(res, err);
    Task
      .findById({_id: req.params.id})
      .then((task) => {
        if(task.author!==user.username){
          return handleError(res, {message: "This task for user - "+user.username +" doesn't exist!"});
        }
        res.status(200).json(task);
      })
      .catch((error) =>{
        return handleError(res, error);    
      });     
  });
};

module.exports = {
  getTask, 
  getTasks,
}
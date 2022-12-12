const Task = require('../models/task');
<<<<<<< HEAD
const createPath = require('../helpers/create-path');

const getTasks = (req, res) => {
  const title = 'Tasks';
  Task 
    .find()
=======
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const createPath = require('../helpers/create-path');

// returns generated access token
const generateAccessToken = (id, username) => {
  const payload = {
    id, 
    username
  }
  return jwt.sign(payload, process.env.SECRET, {expiresIn: "1d"});
}

// returs list of tasks
const getTasks = (req, res) => {
  const title = 'Tasks';
  User.findById(req.userId).exec((err, user) => {
  if (err) return res.render(createPath('error'), {title: 'Error'});
    Task 
    .find({author: user.username})
>>>>>>> 0fd0e5d (Add existing project files to Git)
    .sort({createdAt: -1})
    .then((tasks) => res.render(createPath('tasks'),{ tasks, title }))
    .catch((error) =>{
      console.log(errorMsg(error));
      res.render(createPath('error'), {title: 'Error'});
<<<<<<< HEAD
    });  
};

const getTask = (req, res) => {
  const title = 'Task';
  Task
    .findById(req.params.id)
    .then((task) => res.render(createPath('task'), { task, title }))
=======
    }); 
  }); 
};

// returns filtered list of tasks
const postTasks = (req, res) => {
  if(req.body.filter==='all' || typeof req.body.filter == 'undefined')
  return res.redirect('/tasks');
  const title = 'Tasks';
  User.findById(req.userId).exec((err, user) => {
  if (err) return res.render(createPath('error'), {title: 'Error'});
    Task 
    .find({author: user.username})
    .where("status").equals(req.body.filter)
    .sort({createdAt: -1})
    .then((tasks) => res.render(createPath('tasks'),{ tasks, title, filterValue: req.body.filter }))
>>>>>>> 0fd0e5d (Add existing project files to Git)
    .catch((error) =>{
      console.log(errorMsg(error));
      res.render(createPath('error'), {title: 'Error'});
    }); 
<<<<<<< HEAD
};

=======
  }); 
};

// returns task by id
const getTask = (req, res) => {
  const title = 'Task';
  User.findById(req.userId).exec((err, user) => {
    if (err) return res.render(createPath('error'), {title: 'Error'});
    Task
      .findById({_id: req.params.id})
      .then((task) => {
        if(task.author!==user.username){
          return res.render(createPath('error'), {title: 'Error'});
        }
        res.render(createPath('task'), {title, task});
      })
      .catch((task) =>{
        res.render(createPath('error'), { task, title });    
      });     
  });
};

// update task status to 'Done'
>>>>>>> 0fd0e5d (Add existing project files to Git)
const doneTask = (req, res) =>{
  const title = 'Done Task';
  Task
    .findByIdAndUpdate(req.params.id, {status:'Done'})
    .then((result) => {
       res.redirect('/tasks');
    })
    .catch((error) =>{
<<<<<<< HEAD
      console.log(errorMsg(error));
=======
>>>>>>> 0fd0e5d (Add existing project files to Git)
      res.render(createPath('error'), {title: 'Error'});
    });
};

<<<<<<< HEAD
=======
// delete task
>>>>>>> 0fd0e5d (Add existing project files to Git)
const deleteTask = (req, res) =>{
  const title = 'Task';
  Task
    .findByIdAndDelete(req.params.id)
    .then((result) => {
       res.redirect('/tasks');
    })
    .catch((error) =>{
<<<<<<< HEAD
      console.log(errorMsg(error));
=======
>>>>>>> 0fd0e5d (Add existing project files to Git)
      res.render(createPath('error'), {title: 'Error'});
    }); 
};

<<<<<<< HEAD
=======
// show page for editing task
>>>>>>> 0fd0e5d (Add existing project files to Git)
const updateTask = (req, res) =>{
  const title = 'Edit Task';
  const {text, status} = req.body;
  Task
    .findByIdAndUpdate(req.params.id, {text, status})
    .then((result) => {
       res.redirect('/tasks');
    })
    .catch((error) =>{
<<<<<<< HEAD
      console.log(errorMsg(error));
=======
>>>>>>> 0fd0e5d (Add existing project files to Git)
      res.render(createPath('error'), {title: 'Error'});
    });
};

<<<<<<< HEAD
const addTask = (req, res) =>{
  const {text} = req.body;
  const task = new Task({text, status: 'In progress', author: 'starkov'});
  task
    .save()
    .then((result) => res.redirect('/tasks'))
    .catch((error) =>{
      console.log(errorMsg(error));
      res.render(createPath('error'), {title: 'Error'});
    });
};

=======
// add new task
const addTask = (req, res) =>{
  const {text} = req.body;
  User.findById(req.userId).exec((err, user) => {
    const task = new Task({text, status: 'In progress', author: user.username});
    task
    .save()
    .then((result) => res.redirect('/tasks'))
    .catch((error) =>{
      res.render(createPath('error'), {title: 'Error'});
    });
  });
};

// show page for adding a new task
>>>>>>> 0fd0e5d (Add existing project files to Git)
const getAddTask = (req, res) => {
  const title = 'Tasks';
  res.render(createPath('add-task'),{ title });
};

<<<<<<< HEAD
=======
// get login
const getUser = (req, res) => {
  res.clearCookie('token');
  const title = 'Login';
  res.render(createPath('login'),{ title });
};

// post login
const postUser = async (req, res) => {
  const {username, password} = req.body;
  try{
    let user =  await User.findOne({username: username});
    const validPassword = bcrypt.compareSync(password, user.password);
    if(!validPassword){
      return res.render(createPath('login'), {title: 'Login', message: 'Login or password is not correct'});
    }
    const token = generateAccessToken(user._id, username);
    res.cookie("token", token, {
      httpOnly: true,
    });
    return res.redirect('/tasks');   
  } catch(ex){
    return res.render(createPath('login'), {title: 'Login', message: 'Login or password is not correct'});
  }
};

// export all functions
>>>>>>> 0fd0e5d (Add existing project files to Git)
module.exports = {
  getTask, 
  doneTask,
  deleteTask,
<<<<<<< HEAD
  getTasks,
  updateTask,
  addTask,
  getAddTask
=======
  postTasks,
  getTasks,
  updateTask,
  addTask,
  getAddTask,
  getUser,
  postUser
>>>>>>> 0fd0e5d (Add existing project files to Git)
}
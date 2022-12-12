const express = require('express');
<<<<<<< HEAD
=======
const authMiddleware = require('../middleware/authMiddleware');
>>>>>>> 0fd0e5d (Add existing project files to Git)
const { 
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
  postUser,
>>>>>>> 0fd0e5d (Add existing project files to Git)
} = require('../controllers/task-controller');

const router = express.Router();

// Update task by id
<<<<<<< HEAD
router.post('/edit/:id', updateTask);

// Add a new task
router.post('/add-task', addTask); 

// show page for adding a new task
router.get('/add-task', getAddTask);

// get all tasks
router.get('/tasks', getTasks);

// delete task by id
router.get('/delete/:id', deleteTask);

// update taks to done by id
router.get('/done/:id', doneTask);

// get task by id
router.get('/tasks/:id', getTask);

=======
router.post('/edit/:id', authMiddleware, updateTask);

// Add a new task
router.post('/add-task', authMiddleware, addTask); 

// show page for adding a new task
router.get('/add-task', authMiddleware, getAddTask);

// get all tasks
router.get('/tasks',authMiddleware, getTasks);

// delete task by id
router.get('/delete/:id',authMiddleware , deleteTask);

// update taks to done by id
router.get('/done/:id', authMiddleware, doneTask);

// get task by id
router.get('/tasks/:id', authMiddleware, getTask);

// get task by id
router.post('/tasks', authMiddleware, postTasks);

// get login
router.get('/login', getUser);

// post login
router.post('/login', postUser);

// export router
>>>>>>> 0fd0e5d (Add existing project files to Git)
module.exports = router;
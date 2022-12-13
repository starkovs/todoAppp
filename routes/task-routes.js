const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { 
  getTask, 
  doneTask,
  deleteTask,
  postTasks,
  getTasks,
  updateTask,
  addTask,
  getAddTask,
  getUser,
  postUser,
} = require('../controllers/task-controller');

const router = express.Router();

// Update task by id
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
module.exports = router;
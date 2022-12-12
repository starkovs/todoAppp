const express = require('express');
<<<<<<< HEAD
const { 
  getTask, 
  doneTask,
  deleteTask,
  getTasks,
  updateTask,
  addTask,
  getAddTask
} = require('../controllers/task-controller');
=======
const authMiddleware = require('../middleware/authMiddleware');

const { 
  getTask, 
  getTasks,
} = require('../controllers/api-task-controller');
>>>>>>> 0fd0e5d (Add existing project files to Git)

const router = express.Router();

// Get all tasks
<<<<<<< HEAD
router.get('api/tasks/', getTasks);

// Update task by id
router.post('/edit/:id', updateTask);

// Add a new task
router.post('/add-task', addTask); 

// show page for adding a new task
router.get('/add-task', getAddTask);

// delete task by id
router.get('/tasks/delete/:id', deleteTask);

// update taks to done by id
router.get('/done/:id', doneTask);

// get task by id
router.get('/tasks/:id', getTask);
=======
router.get('/api/tasks',authMiddleware, getTasks);
//  Get task by id
router.get('/api/tasks/:id', authMiddleware, getTask);
>>>>>>> 0fd0e5d (Add existing project files to Git)

module.exports = router;
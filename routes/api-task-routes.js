const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const { 
  getTask, 
  getTasks,
} = require('../controllers/api-task-controller');

const router = express.Router();

// Get all tasks
router.get('/api/tasks',authMiddleware, getTasks);
//  Get task by id
router.get('/api/tasks/:id', authMiddleware, getTask);

module.exports = router;
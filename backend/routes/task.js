const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.post('/', async (req, res) => {
  const { title, description, dueDate, priority, status, assignedTo, createdBy } = req.body;
  try {
    const task = new Task({ title, description, dueDate, priority, status, assignedTo, createdBy });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;

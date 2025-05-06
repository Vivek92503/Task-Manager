const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
  priority: String,
  status: String,
  assignedTo: String,
  createdBy: String
});

module.exports = mongoose.model('Task', TaskSchema);

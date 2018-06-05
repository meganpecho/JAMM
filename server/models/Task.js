// Task Model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  userId: { type: String, required: false },
  name: { type: String, required: true },
  description: { type: String, required: false },
  createdAtDate: { type: Date, required: true },
  completedAtDate: { type: Date, required: false },
  actualTime: { type: Number, required: false },
  estimatedTime: { type: Number, required: false },
  inProgress: { type: Boolean, required: false },
  completed: { type: Boolean, required: true }
});

module.exports = mongoose.model('Task', taskSchema);

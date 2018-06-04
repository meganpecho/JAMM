// Task Model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  userId: { type: String, required: false },
  name: { type: String, required: true },
  description: { type: String, required: false },
  createdAtDate: { type: Date, required: true },
  completedAtDate: { type: Date, required: false },
  totalTimeWorkedMins: { type: Number, required: false },
  estimatedTimeMins: { type: Number, required: false },
  completed: { type: Boolean, required: true }
});

module.exports = mongoose.model('Task', eventSchema);

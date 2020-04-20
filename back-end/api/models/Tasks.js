const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },

});

mongoose.model('Tasks', TasksSchema);
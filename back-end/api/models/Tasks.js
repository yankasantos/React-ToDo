const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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

TasksSchema.plugin(mongoosePaginate);

mongoose.model('Tasks', TasksSchema);
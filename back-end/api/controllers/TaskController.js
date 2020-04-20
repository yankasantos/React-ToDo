const mongoose = require('mongoose');

const Task = mongoose.model('Tasks');

module.exports = {
    async indexe(req, res){
        const tasks = await Task.find();

        return res.json(tasks);
    }
    
};

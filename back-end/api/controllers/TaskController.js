const mongoose = require('mongoose');

const Task = mongoose.model('Tasks');

module.exports = {
    async index(req, res){
        const tasks = await Task.find();

        return res.json(tasks);
    },
    
    async listItens(req, res){
        const item = await Task.create(req.body);

        return res.json(item);


    }
};

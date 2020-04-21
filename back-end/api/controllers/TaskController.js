const mongoose = require('mongoose');

const Task = mongoose.model('Tasks');

module.exports = {
    async index(req, res){
        const tasks = await Task.find();

        return res.json(tasks);
    },
    
    async showItem(req, res){
        const item = await Task.findById(req.params.id);

        return res.json(item);
    },

    async update(req, res){
        const item = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        return item;
    },

    async destroyItem(req, res){

    },

    async createItem(req, res){
        const item = await Task.create(req.body);

        return res.json(item);
    }

    
};

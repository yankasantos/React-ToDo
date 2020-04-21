const mongoose = require('mongoose');


const Task = mongoose.model('Tasks');

module.exports = {
    async index(req, res){
        const {page} = req.query;
        const tasks = await Task.paginate({},{page, limit: 10});

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

        return re.json(item);
    },

    async destroyItem(req, res){
        await Task.findByIdAndRemove(req.params.id);

        return res.send();
    },

    async createItem(req, res){
        const item = await Task.create(req.body);

        return res.json(item);
    }

    
};

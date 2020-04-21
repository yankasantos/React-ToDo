const mongoose = require('mongoose');

const User = mongoose.model("Users");

module.exports = {
    async index(req, res){
        const users = await User.find();
    
        return res.json(users);
    }
};
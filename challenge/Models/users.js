const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const userSchema = new Scheme({
    name: {
        type: String,
        required: true,
        min : [1, "name should be 15 char"],
        max : 15
    },


    message: {
        type: String,
        required: true,
        min : [1, "name should be 15 char"],
        max : 40
    }
})

const Feed = mongoose.model('Feed', userSchema)


module.exports = {Feed}
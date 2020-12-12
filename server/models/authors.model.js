
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({

    name :{
        type: String,
        required:[true,'name required'],
        minLength:[3,'name must be at leat 3 chracters']
    },

} ,{timestamps: true});

const Author = mongoose.model('Author',authorSchema);
module.exports = Author;
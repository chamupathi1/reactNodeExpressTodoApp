const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Task = new Schema({
    content: {
        type: String
    },
    status: {
        type: String
    }
});

module.exports = mongoose.model('Task', Task);
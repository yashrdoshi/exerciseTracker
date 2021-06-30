const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        requried: true,
        minlength: 3,
        trim: true,
        unique: true
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User',userSchema)

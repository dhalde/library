const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema({
    bookname: {
        type: String,
        required: true
    },

    authorname: {
        type: String,
        required: true
    },

    description: {
        type: String,

    },
    ISBN: {
        type: Number,
        required: true,
        unique: true,
        maxlength: 13,
    }
});

const books = mongoose.model('Book_lib', bookSchema);
module.exports = books;
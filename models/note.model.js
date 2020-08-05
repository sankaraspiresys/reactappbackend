const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});
mongoose.set('useFindAndModify', false);

module.exports = mongoose.model('Note', NoteSchema);
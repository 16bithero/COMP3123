const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: String,
    dateAdded: Date,
    dateUpdated: Date
})

// {
//     "noteTitle": "FullStack Notes",
//     "noteDescription": "Activity notes for week 6",
//     "priority:": "MEDIUM",
//     "dateAdded": "10-15-2022"
//     "dateUpdated": "10-16-2022"
// }

module.exports = mongoose.model("Notes", NoteSchema)
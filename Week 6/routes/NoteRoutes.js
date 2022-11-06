const express = require("express");
const NotesModel = require('../models/NotesModel.js');
const app = express()
//TODO - Create a new Note

//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    // Validate request
    if(req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    const newNote = new NotesModel(req.body)
    const note = await newNote.save()
    res.status(201).send(note)
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async(req, res) => {
    // Validate request
    if(req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
    const notes = await NotesModel.find()
    res.status(200).send(notes)
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {
    // Validate request
    if(req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    const findNotes = await NotesModel.findById(req.params.noteId)
    res.status(201).send(findNotes)
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async(req, res) => {
    // Validate request
    if(req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    const updateBook = await NotesModel.findByIdAndUpdate(req.params.noteId, req.body)
    res.status(201).send(updateBook)
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    if(req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
        const deleteNote = await NotesModel.findByIdAndDelete(req.params.noteId)
        if(!deleteNote){
            res.status(400).send({message: "No note to delete"})
        }
            res.status(201).send(deleteNote)
});

module.exports = app
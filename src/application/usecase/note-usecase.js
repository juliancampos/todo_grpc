const noteService = require('../services/note-service')

function listNotes(callback) {
  return noteService.List('', callback)
}

function findNote(id, callback) {
    return noteService.Find({ request: { id } }, callback)
}

module.exports = {
  listNotes,
  findNote
}
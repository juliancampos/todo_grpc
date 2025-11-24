const notesUsecase = require('../usecase/note-usecase')

function List(_, callback) {
  notesUsecase.listNotes(callback);
}

function Find({ request: { id } }, callback) {
  notesUsecase.findNote(id, callback);
}

module.exports = {
  List,
  Find
}
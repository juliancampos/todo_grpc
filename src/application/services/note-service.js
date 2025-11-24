const notes = [
  { id: 1, title: 'Note 1', content: 'Content 1' },
  { id: 2, title: 'Note 2', content: 'Content 2' }
]

function List(_, callback) {
  return callback(null, { notes })
}

function Find({ request: { id } }, callback) {
  const note = notes.find((note) => note.id === id)
  if (!note) return callback(new Error('Not found'), null)
  return callback(null, { note })
}

module.exports = {
  List,
  Find
}
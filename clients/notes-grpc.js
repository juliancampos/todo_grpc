const loadEntityGrpc = require('./load-entity-grpc');

const {
  EntityDefinition: NotesDefinition, grpc,
  HOST
} = loadEntityGrpc('notes.proto');

const client = new NotesDefinition.NoteService( `${HOST}`, grpc.credentials.createInsecure());

client.list({}, (err, notes) => {
  if (err) throw err
  console.log(notes)
})

client.find({ id: 2 }, (err, { note }) => {
  if (err) return console.error(err.details)
  if (!note) return console.error('Not Found')
  return console.log(note)
})

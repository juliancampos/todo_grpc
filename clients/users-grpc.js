const loadEntityGrpc = require('./load-entity-grpc');

const {
  EntityDefinition: UsersDefinition, grpc, HOST
} = loadEntityGrpc('users.proto');

const client = new UsersDefinition.UserService( `${HOST}`, grpc.credentials.createInsecure());

client.list({}, (err, notes) => {
  if (err) throw err
  console.log(notes)
})

client.find({ id: 2 }, (err, { user }) => {
  if (err) return console.error(err.details)
  if (!user) return console.error('Not Found')
  return console.log(user)
})

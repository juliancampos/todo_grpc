const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')

const protoObject = protoLoader.loadSync(path.resolve(__dirname, './src/proto/users.proto'))
const UsersDefinition = grpc.loadPackageDefinition(protoObject)

const client = new UsersDefinition.UserService('127.0.0.1:50051', grpc.credentials.createInsecure())

client.list({}, (err, notes) => {
  if (err) throw err
  console.log(notes)
})

client.find({ id: 2 }, (err, { user }) => {
  if (err) return console.error(err.details)
  if (!user) return console.error('Not Found')
  return console.log(user)
})

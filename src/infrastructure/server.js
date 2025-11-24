const grpc = require('@grpc/grpc-js')
const notesHandler = require('../application/handlers/notes-handler')
const usersHandler = require('../application/handlers/users-handler')
const loader = require('../shared/utils/loader')

const HOST = process.env.HOST || '127.0.0.1:50052';

const load = () => {
    const notesProto = grpc.loadPackageDefinition(loader.load('notes.proto'))
    const usersProto = grpc.loadPackageDefinition(loader.load('users.proto'))

    return { notesProto, usersProto }
}

const addService = (server, notesProto, usersProto) => {
    server.addService(notesProto.NoteService.service, { List: notesHandler.List, Find: notesHandler.Find });
    server.addService(usersProto.UserService.service, { List: usersHandler.List, Find: usersHandler.Find });
}

const initiateServer = (server) => {
    server.bindAsync(
        HOST,
        grpc.ServerCredentials.createInsecure(), () => {
            console.log(`Server running at http://${HOST}`);
        }
    )
}

const start = () => {
    const server = new grpc.Server();
    const { notesProto, usersProto } = load()

    addService(server, notesProto, usersProto);
    initiateServer(server);
}

module.exports = { start }
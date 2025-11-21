const grpc = require('@grpc/grpc-js')
const notesService = require('./notes/note-service')
const usersService = require('./users/user-service')

const PORT = process.env.PORT || 50051;
const URL = process.env.URL || '127.0.0.1';

const start = () => {
    const notesProto = grpc.loadPackageDefinition(notesService.loadNotesProto())
    const usersProto = grpc.loadPackageDefinition(usersService.loadUsersProto())

    const server = new grpc.Server();
    server.addService(notesProto.NoteService.service, { List: notesService.List, Find: notesService.Find });
    server.addService(usersProto.UserService.service, { List: usersService.List, Find: usersService.Find });

    server.bindAsync(
        `${URL}:${50051}`,
        grpc.ServerCredentials.createInsecure(), () => {
            console.log(`Server running at http://${URL}:${PORT}`);
        }
    )
}

module.exports = { start }
const loader = require('@grpc/proto-loader')
const path = require('path')

// const notesProto = loader.loadSync(path.resolve(__dirname, '../proto/notes.proto'))
// const notesProto = loader.loadSync(path.resolve(__dirname, '../proto/notes.proto'))

const load = (protoName) => {
    const protoEntity = loader.loadSync(path.resolve(__dirname, `../proto/${protoName}`))
    return protoEntity;
}


module.exports = {
    load
}
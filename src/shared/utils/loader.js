const loader = require('@grpc/proto-loader')
const path = require('path')
const root = process.cwd()

const load = (protoName) => {
    const protoEntity = loader.loadSync(path.resolve(root, `src/shared/proto/${protoName}`))
    return protoEntity;
}


module.exports = {
    load
}
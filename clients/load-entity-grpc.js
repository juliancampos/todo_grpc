const grpc = require('@grpc/grpc-js')
const loader = require('../src/shared/utils/loader')

const HOST = process.env.HOST;

const createClient = (protoEntityName) => {
    const protoObject = loader.load(protoEntityName)
    const EntityDefinition = grpc.loadPackageDefinition(protoObject)
    return { EntityDefinition, grpc, HOST };
}

module.exports = createClient;

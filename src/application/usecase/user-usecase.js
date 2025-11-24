const userService = require('../services/user-service')

function listUsers(callback) {
  return userService.List('', callback)
}

function findUser(id, callback) {
    return userService.Find({ request: { id } }, callback)
}

module.exports = {
  listUsers,
  findUser
}
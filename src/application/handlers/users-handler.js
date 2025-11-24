const usersUsecase = require('../usecase/user-usecase')

function List(_, callback) {
  usersUsecase.listUsers(callback);
}

function Find({ request: { id } }, callback) {
  usersUsecase.findUser(id, callback);
}

module.exports = {
  List,
  Find
}
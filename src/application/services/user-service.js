const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
]

const List = (_, callback) => (callback(null, { users: users }))

const Find = ({ request: { id } }, callback) => {
    const user = users.find((user) => user.id === id)
    if (!user) return callback(new Error('Not found'), null)
    return callback(null, { user });
}

module.exports = {
    List,
    Find
}
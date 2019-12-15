/* O usuário deve ser capaz de:

criar uma conta, (ok)
deletar a conta,
fazer login,
encontrar todos usuários,
ler suas informações por id, 
encontrar todos que precisam de um livro (doações)

*/

const { connect } = require('../models/database')
const userModel = require('../models/userSchema')
const { booksModel } = require('../models/booksSchema')
 

connect()

const getAll = (req, res) => {
    userModel.find((error, users) => {
        if (error) {
            return res.status(500).send(error)
        }

        return res.status(200).send(users)
    })
}

const add = (req, res) => {
    const newUser = new userModel(req.body)

    newUser.save((error) => {
        if (error) {
            return res.status(500).send(error)
        }

        return res.status(201).send(newUser)
    })

}


module.exports = {
    getAll,
    add
}
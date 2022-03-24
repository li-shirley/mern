const {Author} = require("../models/author.model")

module.exports.allAuthors = (request, response) => {
    Author.find({})
        .then (authors => response.json(authors))
        .catch(err => response.status(400).json(err))
}

module.exports.oneAuthor = (request, response) => {
    Author.findOne({_id : request.params.id})
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err))
}

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err))
}

module.exports.editAuthor = (request, response) => {
    Author.findOneAndUpdate({_id : request.params.id}, request.body, {new: true, runValidators: true})
    .then(author => response.json(author))
    .catch(err => response.status(400).json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({_id : request.params.id})
        .then(res => response.json(res))
        .catch(err => response.status(400).json(err))
}

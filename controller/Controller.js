const Book = require('../model/Book')
class Controller {
  static read(req, res) {
    Book
      .findAll(function (err, data) {
        if (err) {
          res.status(500).json(err)
        } else {
          res.status(200).json(data)
        }
      })
  }

  static create(req, res) {
    let book = new Book(req.body)
    Book
      .create(book, function (err, newData) {
        if (err) {
          res.status(500).json(err)
        } else {
          res.status(201).json('Create Data Success')
        }
      })
  }

  static findOne(req, res) {
    Book
      .findOne(req.params.id, function (err, data) {
        if (err) {
          res.status(500).json(err)
        } else {
          res.status(200).json(data)
        }
      })
  }

  static update(req, res) {
    let book = new Book(req.body)
    Book
      .update(req.params.id, book, function (err, data) {
        if (err) {
          res.status(400).json(err)
        } else {
          res.status(200).json('Updated Success')
        }
      })
  }

  static remove(req, res) {
    Book
      .delete(params.id, function(err, data) {
        if(err) {
          res.status(400).json(err)
        } else {
          res.status(200).json('Delete data Success')
        }
      })
  }
}

module.exports = Controller
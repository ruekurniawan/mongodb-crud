const { MongoClient, ObjectId } = require('mongodb')
const url = 'mongodb://localhost'
const dbName = 'Book-CRUD'
let client = null

class Book {
  constructor(isbn, title, author, category, stock) {
    this.isbn = isbn,
    this.title = title,
    this.author = author,
    this.category = category,
    this.stock = stock
  }

  static findAll(cb) {
    client = new MongoClient(url, { useNewUrlParser: true })
    client
      .connect(err => {
        if (err) {
          cb(err, null)
        } else {
          console.log("Connected successfully to server");
          var db = client.db(dbName)
          var collection = db.collection('books')
          collection
            .find()
            .toArray((err, data) => {
              cb(err, data)
            })
          client.close()
        }
      }) 
  }

  static create(book, cb) {
    client = new MongoClient(url, { useNewUrlParser: true })
    client
      .connect((err) => {
        if (err) {
          cb(err, null)
        } else {
          var db = client.db(dbName)
          var collection = db.collection('books')
          collection
            .insertOne(book, (err, result) => {
              cb(err, result)
            })
          client.close()
        }
      })
  }

  static findOne(bookId, cb) {
    if (err) {
      cb(err)
    } else {
      client = new MongoClient(url, { useNewUrlParser: true })
      client
        .connect(err => {
          if (err) {
            cb(err)
          } else {
            var db = client.db(dbName)
            var collection = db.collection('books')

            collection
              .find({ '_id': ObjectId(bookId) })
              .toArray((err, result) => {
                cb(err, result)
              })
            client.close()
          }
        })
    }
  }

  static update(bookId, newBook, cb) {
    client = new MongoClient(url, { useNewUrlParser: true })
    client
      .connect(function (err) {
        if (err) {
          cb(err)
        } else {
          var db = client.db(dbName)
          var collection = db.collection('books')

          collection
            .update({ '_id': ObjectId(bookId) }, newBook, function (err, result) {
              cb(err, result)
            })
          client.close()
        }
      })
  }

  static delete(bookId, cb) {
    if (err) {
      cb(err)
    } else {
      client = new MongoClient(url, { useNewUrlParser: true })
      client
        .connect(function (err) {
        if (err) {
          cb(err)
        } else {
          client
            .connect(function (err) {
              var db = client.db(dbName);
              var collection = db.collection('books')
              collection
                .deleteOne({ "_id": ObjectId(bookId) }, function (err, result) {
                cb(err, result)
              })
            client.close();
          });
        }
      })
    }
  }
}

module.exports = Book
const express = require('express')
const router = express.Router()
const controllerBook = require('../controller/Controller')

router.get('/', controllerBook.read)
router.post('/', controllerBook.create)
router.get('/:id', controllerBook.findOne)
router.put('/:id', controllerBook.update)
router.delete('/:id', controllerBook.remove)

module.exports = router
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/', bookController.createBook);
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.patch('/:id', bookController.partialUpdateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
console.log("book router working")

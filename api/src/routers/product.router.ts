import express from 'express'

import {
  findById,
  findAll,
  findByCategory,
  findByName,
  updateProduct,
  deleteProduct,
  createProduct,
} from '../controllers/product.controller'

const router = express.Router()

// Every path we define here will get /api/v1/products prefix
router.get('/', findAll)
router.get('/category', findByCategory)
router.get('/name', findByName)
router.get('/:productId', findById)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)
router.post('/', createProduct)

export default router

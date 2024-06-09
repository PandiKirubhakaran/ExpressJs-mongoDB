const express=require('express')
const Product=require('../modules/prouct.module.js')
const router=express.Router()
const {getProducts, getSingleProduct, postProduct, putProduct, deleteProduct}=require('../controller/prouct.controller.js')

router.get('/', getProducts)
router.get('/:id',getSingleProduct)
router.post('/',postProduct)
router.put('/:id',putProduct)
router.delete('/:id',deleteProduct)

module.exports = router;
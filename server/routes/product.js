const express = require("express");
const router = express.Router();

const Product = require("../model/product");

router.get('',(req,res)=>{
  Product.find({},(err,foundProducts)=>{
    res.json(foundProducts);
  })
})

module.exports = router;
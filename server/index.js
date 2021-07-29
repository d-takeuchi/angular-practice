const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/dev");
const SampleDb = require("./sample-db");

const productRoutes = require("./routes/product");

mongoose.connect(config.DB_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(()=>{
    const sampleDb = new SampleDb();
    sampleDb.initDb();
})

const app = express();

app.use('/api/v1/products',productRoutes)

app.get('/product',(req,res)=>{
  res.json({'success':true});
});

const PORT = process.env.PORT || '3001';

app.listen(PORT,()=>{
  console.log("i am running")
})


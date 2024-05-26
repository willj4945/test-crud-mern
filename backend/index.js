
import express from 'express'
import {uri} from './config.js'
import mongoose from 'mongoose'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! This is the node API server!')
})



mongoose
  .connect(uri)
  .then(()=> {
    console.log("App connectioned to DB")
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  })
  .catch((error)=>{
    console.log(error)
  })
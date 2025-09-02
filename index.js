import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.status(202).json({
    msg: 'Hello World'
  })
  console.log("dentro del get")
})

app.listen(3000)
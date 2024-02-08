require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
const user = {
  name:"vidhi",
  age:21
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
  res.send('hello world')
})

app.get('/login',(req,res)=>{
  res.send('<h1>please login at</h1>')
})
app.get('/youtube',(req,res)=>{
  res.send('<h2>chai and coffie</h2>')
})
app.get('/github',(req,res)=>{
  res.json(user)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
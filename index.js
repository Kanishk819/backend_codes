// console.log("Kanishk Shukla");

require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
})

app.get('/login',(req,res) => {
    res.send('<h1>Kanishk Shukla</h1>')
})
//No hot reload like react which injects edited files at runtime so we can use nodemon 


/** Backend ko production mein deploy karte samay saare codes ko deploy nahi kiya jaata kyuki sensitive data bhi ho sakta hai isliye dotenv exact output production mein leke jaayega*/
/** .env file mein PORT define karke production ready bana do  */
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
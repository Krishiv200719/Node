const express = require('express')
const fs = require('fs')

const app = express()
app.use(express.text())

app.get('/', (req, res) => {
  res.send("THIS IS DEFAULT / PAGE")
})

app.post('/sendData', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
  data.push(req.body)
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2))
  res.send(data)
})

app.patch('/updateData/:id', (req, res) => {
  const { id } = req.params;
  console.log(id)
  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
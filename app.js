const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.post('/login', (req, res) => {
    console.log(req.body);
    res.json({status: 'ok'});
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


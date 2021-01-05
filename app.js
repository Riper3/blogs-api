const express = require('express')
const app = express()
const port = 3000;

require('./routes/routes.js')(app)

app.listen(port, () =>
  console.log(`Listening at http://localhost:${port}`)
)

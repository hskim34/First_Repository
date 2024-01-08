const express = require('express');
const app = express()
const port = 3300

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hskim:suh04130!@hscluster.3pkqm6x.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true /*useCreateIndex: true, useFindAndModify: false*/
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))




app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`listening on port ${port}`))

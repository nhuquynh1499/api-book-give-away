require('dotenv').config();

const express = require("express");
const bodyParser = require('body-parser')

const apiBookRoute = require('./api/routes/book.route');
const apiUserRoute = require('./api/routes/user.route');
const connect = require('./DB/connection');


connect().then(() => {
  console.log('Connect success');
}).catch(console.log);  


const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true })) 
app.use(bodyParser.json())


app.use('/api/user', apiUserRoute);
app.use('/api/book', apiBookRoute);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
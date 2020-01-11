const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/user');

const port = process.env.PORT || 3000;
const app = express();

//CORS error handling
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Content-Allow-headers', 'Content-Type, Authorization');
    next();
});

app.use(express.static('/public'));

app.use(bodyParser.json());

app.use('/api', router);
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html');
});



app.listen(port, () => {
    console.log(`Server started on Port : ${port}`);
});
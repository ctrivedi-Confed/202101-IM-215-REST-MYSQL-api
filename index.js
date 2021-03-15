const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (request, response) => {

    // response.json({msg: 'received1'});
    //console.log(request.query);

    //console.log(request.params);

    console.log(request.body);
    // response.end();
    response.end();
})

app.get('/:firstName/:lastName/:age', (request, response) => {
    console.log(request.params);
    response.end();
})

app.listen(3333, () => {
    console.log('server is on and working on port 3333');
})
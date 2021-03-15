const express = require('express');
const app = express();

app.get('/', (request, response) => {

    // response.json({msg: 'received1'});
    response.end();
})

app.listen(3333, () => {
    console.log('server is on and working on port 3333');
})
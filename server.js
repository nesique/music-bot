const express = require('express');
const app = express();
const bot = require('./index.js');

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const listener = app.listen(process.env.PORT, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});

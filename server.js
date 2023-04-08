import express from "express";
const app = express();
import bot from "./index.js";

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const listener = app.listen(process.env.PORT, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});

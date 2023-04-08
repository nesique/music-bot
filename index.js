import "dotenv/config";
import Types from "./src/utils/Types.js";
Types()
/* Import express */
import express from "express";
const app = express();

/* Import our client structure */
import Bot from "./src/struct/Bot.js";
export const client = new Bot();

/* Call our start function to load the bot instance */
(async () => await client.start(process.env.TOKEN))();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const listener = app.listen(process.env.PORT, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});

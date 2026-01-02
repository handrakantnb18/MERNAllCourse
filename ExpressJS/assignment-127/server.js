require(`dotenv`).config();

const express = require(`express`);
const app =express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.NAME = process.env.APP_NAME || "DefaultName";

app.get('/', (req, res) => {
    res.send(`Hello ${APP_NAME} say mi thank full to the making this good for you`);
});

app.listen(PORT, () => {
    console.log(`${APP_NAME} is running on port ${PORT}`);
});


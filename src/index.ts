import express from 'express';
import db from './modules/db';

const app = express();

app.get('/', async (req, res) => {
    res.send('Hello world!');
})

const port = Number(process.env.PORT || 8080);
app.listen(port, '0.0.0.0', () => console.log(`Server is running on port ${port}`));
// we have used 0.0.0.0 because we are running the server inside a docker container so instead of running it in localhost we need to run it in 0.0.0.0
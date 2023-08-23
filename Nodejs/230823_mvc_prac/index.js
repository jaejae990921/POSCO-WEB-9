const express = require('express')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require('./routes/main');
app.use('/', router);

app.use(('*'), (req, res) => {
    res.send('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('prac_1'); 
});

app.get('/getForm', (req, res) => {
    console.log(req.query);
    res.render('prac_1_result', {
        userInfo: req.query
    })
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});
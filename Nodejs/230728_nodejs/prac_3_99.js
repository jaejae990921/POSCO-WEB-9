const express = require('express');
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render('prac_3_99', {num:[2, 3, 4, 5, 6, 7, 8, 9]})
});

app.listen(PORT, () => {
    console.log("서버 열림");
    console.log(`http://localhost:${PORT}`)
});
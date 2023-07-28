const express = require('express');
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/public", express.static("./public"));

app.get('/main', (req, res) => {
    res.render("prac_4_a", {link: ["prac1", "prac2", "prac3"]})
});

app.get('/prac1', (req, res) => {
    res.render("prac_1_warm")
});

app.get('/prac2', (req, res) => {
    res.render("prac_2_fruits")
});

app.get('/prac3', (req, res) => {
    res.render("prac_3_99", {num:[2, 3, 4, 5, 6, 7, 8, 9]})
});

app.listen(PORT, () => {
    console.log("서버 열림");
    console.log(`http://localhost:${PORT}/main`)
});
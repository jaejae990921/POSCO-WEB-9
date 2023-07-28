const express = require('express');
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/public", express.static("./public"));

app.get("/", (req, res) => {
    res.render('prac_2_fruits')
});

app.listen(PORT, () => {
    console.log("서버 열림");
    console.log(`http://localhost:${PORT}`)
});
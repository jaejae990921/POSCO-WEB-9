const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use('/uploads', express.static(__dirname + '/uploads'));

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/');
        },
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const newName = path.basename(file.originalname, ext) + Date.now() + ext;
            cb(null, newName);
        }
    }),
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', upload.array('userfiles'), (req, res) => {
    console.log(req.files);
    res.send(req.files);
});

app.use('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
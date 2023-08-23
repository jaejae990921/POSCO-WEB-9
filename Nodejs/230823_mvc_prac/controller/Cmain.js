const person = require('../model/Model');

const main = (req, res) => {
    res.render('index');
}

const info = (req, res) => {
    console.log(person);
    res.render('info', { info: person });
}

const addPost = (req, res) => {
    person.push({
        id: person.length + 1,
        name: req.body.name,
        gender: req.body.gender,
        major: req.body.major
    });
    res.send({ res: true});    
}

module.exports = {
    main,
    info,
    addPost
}
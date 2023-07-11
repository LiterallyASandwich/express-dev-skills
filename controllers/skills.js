const Skill = require('../models/todo')


function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('todos/show', {
        skill: Skill.getOne(req.params.id)
    });
}

module.exports = {
    index,
    show
}
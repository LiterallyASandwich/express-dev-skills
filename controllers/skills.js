const Skill = require('../models/skill')


function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill'});
}

function create(req, res) {
    Skill.create(req.body)
   
    res.redirect('/skills');
  }

  function deleteSkill(req, res) {
    Todo.deleteOne(req.params.id)

    res.redirect('/skills');
  }

  function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
      title: 'Edit Skill',
      skill
    });
  }

  function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills`);
  }

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}
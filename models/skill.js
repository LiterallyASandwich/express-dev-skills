const skills = [
    {id: 1253, skill: 'What?', done: true},
    {id: 1274, skill: 'How did you get into my house?', done: false},
    {id: 1398, skill: 'And why are you holding a butterknife?!', done: false}
  ];
	
  function getAll() {
    return skills;
  }

function getOne(id) {
    id = parseInt(id);

    return skills.find(skill => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000000;

  skill.done = false;
  skills.push(skill);
}

function deleteOne(id) {
  id =parseInt(id);

  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

  function update(id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

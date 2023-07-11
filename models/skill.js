const skills = [
    {id: 125223, skill: 'What?', done: true},
    {id: 127904, skill: 'How did you get into my house?', done: false},
    {id: 139608, skill: 'And why are you holding a butterknife?!', done: false}
  ];
	
  function getAll() {
    return skills;
  }

function getOne(id) {
    id = parseInt(id)

    return skills.find(skill => skill.id === id);
}

  module.exports = {
    getAll,
    getOne
  };

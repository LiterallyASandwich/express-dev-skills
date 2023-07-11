const skills = [
    {id: 1253, skill: 'What?', has: true},
    {id: 1274, skill: 'How did you get into my house?', has: false},
    {id: 1398, skill: 'And why are you holding a butterknife?!', has: false}
  ];
	
  function getAll() {
    return skills;
  }

function getOne(id) {
    id = parseInt(id);

    return skills.find((skill) => skill.id === id);
}

  module.exports = {
    getAll,
    getOne,
  };

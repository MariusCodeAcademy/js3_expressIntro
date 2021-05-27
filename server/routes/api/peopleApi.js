const express = require('express');
const router = express.Router();
let personId = 6;
let people = require('../../js/peopleData');

// get all people Endpoint
router.get('/', (req, res) => res.json(people));
// get one people Endpoint
router.get('/:id', (req, res) => {
  const paramId = req.params.id;

  const found = people.find((p) => p.id === paramId);

  if (!found) {
    res.status(404).json({ errorMsg: `sorry person with id ${paramId} was not found` });
  }

  // grazinam json
  res.json(found);
});

// Create one people Endpoint
// gauti duomenis is vartojo formos arba json pavidalu ir sukuri nauja partotoja tarp savo people
router.post('/', (req, res) => {
  console.log(' This is what was set to server in body', req.body); //{ name: 'James', surname: 'Jameson' }
  // prideti nauja people objekta

  const newPerson = {
    id: (++personId).toString(),
    name: req.body.name,
    surname: req.body.surname,
    gender: req.body.gender,
    isMarried: req.body.ismarried,
  };

  people.push(newPerson);
  // res.json(people);
  res.redirect('/');
});

// edit one peope Endpoint
router.put('/:id', (req, res) => {
  console.log('executing put request');
  const paramId = req.params.id;

  const found = people.find((p) => p.id === paramId);
  if (!found) {
    res.status(404).json({ errorMsg: `sorry person with id ${paramId} was not found` });
  }

  const { name, surname } = req.body;
  // atnjaujinti zmongu
  found.name = name || found.name;
  found.surname = surname ? surname : found.surname;

  res.json({ msg: 'User was updated', updatedUser: found });
});

// delete one people Endpoint
router.delete('/:id', (req, res) => {
  const paramId = req.params.id;
  // randam ka norima istrinti pagal id
  const found = people.find((p) => p.id === paramId);

  if (!found) {
    res.status(404).json({ errorMsg: `sorry person with id ${paramId} was not found` });
  }

  // paliekam visus objektus masyve iskyrus ta kuri radom
  // const leftPeopleAfterDelete = people.filter((p) => p.id !== paramId);
  people = people.filter((p) => p !== found);

  // grazinam json
  res.json({ msg: 'delete success', deletePerson: found, leftPeopleAfterDelete: people });
});

module.exports = router;

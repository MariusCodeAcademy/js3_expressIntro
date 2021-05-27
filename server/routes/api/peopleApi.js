const express = require('express');
const router = express.Router();

const people = require('../../js/peopleData');

// our api
router.get('/', (req, res) => {
  // grazinam json
  res.json(people);
});
// get one people
router.get('/:id', (req, res) => {
  const paramId = req.params.id;

  const found = people.find((p) => p.id === paramId);

  if (!found) {
    res.status(404).json({ errorMsg: `sorry person with id ${paramId} was not found` });
  }

  // grazinam json
  res.json(found);
});

module.exports = router;

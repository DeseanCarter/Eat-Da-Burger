const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      res.render('index', (hbsObject));
    });
  });

  router.post('/api/burgers', (req, res) => {
    burger.create(req.body.name, (result) => {
      res.json({ id: result.id });
    });
  });

  router.put('/api/burgers/:id', (req, res) => {
    const id = req.params.id;
    burger.update(
      id,
      (result) => {
        res.json({ id: result.id });
      }
    );
  });
  

module.exports = router;
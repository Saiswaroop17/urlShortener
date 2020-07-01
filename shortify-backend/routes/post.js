const express = require('express');
const router = express.Router();

const Model = require('../util/dbModel');
/* GET home page. */
router.post('/', function(req, res, next) {
  const {url, slug} = req.body;

  const group = new Model({url, slug});
  group.save().then((data)=> res.json(data)).catch(err=>next(err));

});

module.exports = router;

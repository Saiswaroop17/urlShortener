var express = require('express');
var router = express.Router();


const Model = require('../util/dbModel');
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  const slug = req.params.id;
  Model.where({slug}).findOne().then(data=>res.json(data)).catch(err=>next(err));

});

module.exports = router;

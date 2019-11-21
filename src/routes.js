const router = require('express').Router();
const TestController = require('@controller/test');

router
  
  .post('/', TestController.createSomeone);

  module.exports = router;
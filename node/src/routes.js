const express =  require('express');

const router = express.Router();

const userController = require('./controllers/userController');


router.get('/kev', (req, res) => {
  res.send('<h1 style="color:blue; font-family:Roboto; text-shadow:2px 2px 3px rgba(0,0,0,0.3)"> oi </h1>');
});

router.get('/users', userController.list);

router.post('/users', userController.create);


module.exports = router;
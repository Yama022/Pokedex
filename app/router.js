const express = require('express');
const router = express.Router();


const mainController = require('./controllers/mainController');


router.get('/', mainController.homePage);

router.get('/detail/:id', mainController.detailPokemon);

router.get('/type', mainController.type);

router.get('/typeOf/:id', mainController.typeOf);

router.get('/quiz', mainController.quiz);

/* router.get('/search', mainController.searchPokemon);
 */




module.exports = router;
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const recetasParams = require('../controllers/recetasParams');

const diets = require('../controllers/diets');

const recetaPost = require('../controllers/recetasPost');

const recetasQuery = require('../controllers/recetasQuery');

const allRecipes = require('../controllers/allRecipes');

const miReceta = require('../controllers/miReceta');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//obtine todas las dietas
router.get('/diets', (req,res) => {
    diets(req,res);
});

//obtiene las recetas creadas por el usuario de la base de datos
router.get('/miReceta', (req,res) => {
    miReceta(req,res);
});

//obtiene de todas las recetas imagen,titulo,dietas
router.get('/allRecipes', (req,res) => {
    allRecipes(req,res);
});

//obtiene las recetas pasandole una query
router.get('/recipes/name', (req,res) => {
    recetasQuery(req,res);
});

//busca una receta especifica por Id y devuelve la info relevante
router.get('/recipes/:idRecipe', (req,res) => {
    recetasParams(req,res);
});


//crea una receta y la guarda en la DB
router.post('/recipes', (req,res) => {
    recetaPost(req,res);
});


module.exports = router;

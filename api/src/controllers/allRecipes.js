require('dotenv').config();
const { API_KEY } = process.env;

const axios = require('axios');

const {Recipe,Diets} = require('../db');

const URL = `https://api.spoonacular.com/recipes`;

const allRecipes = async (req,res) => {
    try {
        const {data} = await axios(`${URL}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);

        const recets = [];

        //obtengo de manera especifica el titulo, imagen y dietas de cada receta
        data.results.map(recet => recets.push({id: recet.id, title: recet.title, healthScore: recet.healthScore, imagen: recet.image, diets: recet.diets.join(' , ')}));

        //obtengo las recetas creadas por el usuario junto con las dietas
        const recetas = await Recipe.findAll({include: [{
            model: Diets,
            through: {attributes: []},
            attributes: ["nombre"],
        }],
    });

        //obtengo datos especificos de la base de datos
        const recetDb = recetas.map(res => {return {id: res.id, title: res.nombre, healthScore: res.healthScore, imagen: res.imagen, diets: res.diets.map(elem => elem.nombre).join(', '),}});

        //concaten lo que hay en la base datos y la API
        const allRecets = recetDb.concat(recets);

        res.status(200).json(allRecets);
        
    } catch (error) {

        res.status(404).json({error: error.message});
    }
}

module.exports = allRecipes;
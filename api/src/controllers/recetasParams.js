require('dotenv').config();
const { API_KEY } = process.env;

const axios = require('axios');

const {Recipe, Diets} = require('../db')

const URL = `https://api.spoonacular.com/recipes`;

const recetasParams = async (req,res) => {
    try {
        const {idRecipe} = req.params;

        //si el ID es en formato UUID
        if(isNaN(idRecipe)){
            //obtengo todas las recetas creadas por el usuario
            const recetas = await Recipe.findAll({
                    include: [{
                    model: Diets,
                    through: {attributes: []},
                    attributes: ["nombre"],
                }],
            });
            //filtro por el ID recibido
            const recetaDb = recetas.filter(obj => obj.id === idRecipe);
            //obtengo los datos en orden
            const recets = recetaDb.map(res => {return {id: res.id, title: res.nombre, imagen: res.imagen, summary: res.resumenPlato, diets: res.diets.map(elem => elem.nombre).join(', '), healthScore: res.healthScore, stepByStep: res.pasoAPaso}});

            if(!recets.length) return res.status(404).json({error: 'La receta no existe'});            
            
            return res.status(200).json([...recets]);
        }


        const {data} = await axios(`${URL}/${idRecipe}/information?apiKey=${API_KEY}`);
        
        //desestructuracion de datos que neceisto de data
        const {id, title,image,summary,diets,healthScore,analyzedInstructions} = data;

        //saco precisamente de la propiedad de instrucciones los pasos a seguir
        const stepByStep = analyzedInstructions[0].steps.map(elem => {return {number: elem.number, step: elem.step, ingredients: elem.ingredients}});

        return res.status(200).json([{id, title,imagen: image,summary,diets,healthScore,stepByStep}]);
        
    } catch (error) {
        res.status(404).json({error: 'La receta no existe'});
    }
};



module.exports = recetasParams;
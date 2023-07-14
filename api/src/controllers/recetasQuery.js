require('dotenv').config();
const { API_KEY } = process.env;

const axios = require('axios');

const {Recipe, Diets} = require('../db');

const URL = `https://api.spoonacular.com/recipes`;

const recetasQuery = async (req,res) => {
    try {
        const {nombre} = req.query;

        const recetas = await Recipe.findAll({
            include: [{
            model: Diets,
            through: {attributes: []},
            attributes: ["nombre"],
        }],
    });

    const recetsDB = recetas.map(res => {return {id: res.id, title: res.nombre, imagen: res.imagen, diets: res.diets.map(elem => elem.nombre).join(', ')}});
        
        
        const {data} = await axios(`${URL}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
        
        const recets = [];
        
        data.results.map(recet => recets.push({id: recet.id, title: recet.title, imagen: recet.image, diets: recet.diets.join(' , ')}));

        const conc = recets.concat(recetsDB);

        //filtra todas las recetas en base a lo que se recibe por query
        const recet = conc.filter(obj => obj.title.toLowerCase().includes(nombre.toLowerCase()));

        //si no se encontró resultado devuelve un errors
        if(!recet.length) return res.status(404).json({error: "No se encontro la receta"});

        return res.status(200).json(recet);

    } catch (error) {

        res.status(404).json(error.message);
    }
}

module.exports= recetasQuery;
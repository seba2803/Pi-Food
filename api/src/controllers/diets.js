require('dotenv').config();
const { API_KEY } = process.env;

const axios = require('axios');

const {Diets} = require('../db');

const URL = `https://api.spoonacular.com/recipes`;

const diets = async (req,res) => {
    try {

        const dietas = await Diets.findAll();
        // const dietas = await Diets.findAll();
        if(!dietas.length){
        //agrego la queryparam number=100 para que solo trabaje con las 100 primeras recetas de la API
        const {data} = await axios(`${URL}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);

        //utilizo precisamente el array results que contiene toda la info de data
        const {results} = data;

        //mapeo el array results
        //guardo cada array de diets en la variable diets
        //por cada array anidado, lo "aplano" con el metodo flat
        let diets = results.map(obj => obj.diets).flat(Infinity);

        //elimino los valores repetidos con el metodo new Set()
        const dont = new Set(diets);

        //guardo el objeto sin repetidos en formato array
        const diet = Array.from(dont).map(diet => {
            return {nombre: diet};
        });

           const Dietas = await Diets.bulkCreate(diet)

            const Dietas2 = Dietas.map(dieta => dieta.toJSON())

       return res.status(200).json(Dietas2);

    }

    return res.status(200).json(dietas);

    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

module.exports = diets;
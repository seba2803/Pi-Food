const {Recipe, Diets} = require('../db');

const miReceta = async (req,res) => {
    try {

        const options = {include: [{
            model: Diets,
            through: {attributes: []},
            attributes: ["nombre"],
        }],
    };
        const recetas = await Recipe.findAll(options);
        
        const recets = recetas.map(res => {return {id: res.id, title: res.nombre, imagen: res.imagen, healthScore: res.healthScore, pasoAPaso: res.pasoAPaso, diets: res.diets.map(elem => elem.nombre).join(', '),}});
    
        res.status(200).json(recets);
        
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = miReceta;
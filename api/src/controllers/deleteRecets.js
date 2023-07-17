const {Recipe} = require('../db');

const deleteRecets = async(req,res) => {
    try {
        const {id} = req.params;
    
        await Recipe.destroy({where: {id}});
    
        res.status(200).json('Se ha eliminado con exito');
        
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

module.exports = deleteRecets;
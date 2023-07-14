const {Recipe} = require('../db');

const recetaPost = async (req,res) => {
    try {
        const {nombre,imagen,resumenPlato,healthScore,pasoAPaso,diets} = req.body;
        
        //valida los datos que se requieren
        if(!nombre || !imagen || !resumenPlato || !pasoAPaso){
            res.status(404).json('debe llenar los campos requeridos');
        }

        //crea el modelo en base a los datos enviados
        const receta = await Recipe.create({nombre:nombre, imagen:imagen, resumenPlato:resumenPlato, healthScore:healthScore, pasoAPaso:pasoAPaso});

        //añade el array de IDs en la tabla intermedia
        await receta.addDiets(diets);

        res.status(200).json(receta);

    } catch (error) {
        res.status(404).json(error.message);
    }
};

module.exports = recetaPost;
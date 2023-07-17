
const regexUrl = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';

const url = new RegExp(regexUrl, 'i')

const validation = (data) => {

    const error = {};

    if(data.nombre == ' ' || data.nombre.length < 15 || data.nombre.length > 55){
        error.nombre = 'Debe ser un nombre valido'; 
    }
    if(data.resumen.length < 100 || !data.resumen.includes(' ')){
        error.resumen = 'Este campo debe ser llenado correctamente';
    }
    if(data.health < 0 || data.health > 100 || data.health == ''){
        error.health = 'Debe ser un numero entro 0 y 100';
    }
    if(data.pasos.length < 140 || !data.pasos.includes(' ')){
        error.pasos = 'Debes ser mas explícito';
    }
    if(data.imagen.length < 20 || !url.test(data.imagen)){
        error.imagen = 'Debe ser una URL valida';
    }
    if(!data.dietas[0]){
        error.dietas = 'Debe tener al menos una dieta';
    }
    return error;
};

export default validation;
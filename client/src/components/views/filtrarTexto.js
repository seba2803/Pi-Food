function filtrarTexto(texto){

    if (texto) {
        // Expresión regular para buscar etiquetas HTML
        const regex = /(<([^>]+)>)/ig;
    
        // Remover etiquetas y atributos HTML
        var newTexto = texto.replace(regex, "");
    
        // Retornar el texto sin etiquetas HTML
        return newTexto;
      } else {
        return "";
      }
};

export default filtrarTexto;
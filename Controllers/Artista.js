const axios = require('axios');
const apiKey = process.env.API_KEY;
const getArtistas = (req, res) => {
    axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}`)
        .then(({ data }) => {
            const artistasFiltrados = data.facets[0].facets.map(artista => ({
                principalOrFirstMaker:artista.key
            }));
            res.status(200).json(artistasFiltrados);
        })
        .catch((error)=>{
            //si sucede una respuesta de error de la api utlizada
            if(error.response){
                const { status, statusText, data } = error.response;
                res.status(status).json({
                    status:status,
                    msg:statusText,
                    detalle:data
                });
            } else{
                res.status(500).json({
                    status:500,
                    msg: 'Error inesperado'
                });
            }
        });
}
module.exports = {
    getArtistas
}
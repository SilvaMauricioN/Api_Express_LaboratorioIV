const axios = require('axios');
const apiKey = process.env.API_KEY;

const getObras = (req, res) => {
    const {nombreArtista} = req.query;
    axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&involvedMaker=${nombreArtista}`)
        .then(({ data }) => {
            const obrasArtista = data.artObjects;
            res.status(200).json(obrasArtista);
        })
        .catch((error)=>{
            //si sucede una respuesta de error de axiso, es decir de la api
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
const getObraPorId = (req, res) => {
    const { id } =req.params;
    axios.get(`https://www.rijksmuseum.nl/api/nl/collection/${id}?key=${apiKey}`)
        .then(({ data }) => {
            const obraArtista = data.artObject;
            const obraDetalles = {
                id: obraArtista.id,
                objectNumber: obraArtista.objectNumber,
                title: obraArtista.title,
                longTitle: obraArtista.longTitle,
                copyrightHolder: obraArtista.copyrightHolder,
                webImage: obraArtista.webImage.url,
                titles: obraArtista.titles,
                description: obraArtista.description,
                objectTypes: obraArtista.objectTypes,
                objectCollection: obraArtista.objectCollection,
                principalMaker: obraArtista.principalMaker,
                materials: obraArtista.materials,
                techniques: obraArtista.techniques,
                productionPlaces: obraArtista.productionPlaces,
                dating: obraArtista.dating,
                periods: obraArtista.periods,
                places: obraArtista.places,
                Dimensions: obraArtista.dimensions,
                physicalMedium: obraArtista.physicalMedium
            };

            res.status(200).json(obraDetalles);
        })
        .catch((error)=>{
            //si sucede una respuesta de error de axiso, es decir de la api
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
    getObras,
    getObraPorId
}
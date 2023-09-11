const rutaNoDefinida = (req, res) => {
    res.status(404).json({
        statusCode: 404,
        message: "Ruta No Encontrada"
    });
}
module.exports = {
    rutaNoDefinida
}
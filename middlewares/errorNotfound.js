module.exports = (req, res, next) => {
    res.status(404).json({
        error: 'Pagina non trovata!',
        status: 404
    })
}
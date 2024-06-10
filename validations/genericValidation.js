const paramID = {
    id: {
        in: ['params'],
        isInt: {
            errorMessage: 'ID deve essere un numero intero'
        }
    }
}

module.exports = {
    paramID
}
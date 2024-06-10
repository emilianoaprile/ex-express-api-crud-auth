const bodyData = {
    name: {
        in: ["body"],
        notEmpty: {
            errorMessage: 'Name del tag è un campo obbligatorio.',
            bail: true
        },
        isString: {
            errorMessage: 'Name del tag deve essere una stringa.',
            bail: true
        },
        isLength: {
            errorMessage: 'Name del tag deve essere di almeno 2 caratteri',
            options: {min: 2}
        }
    }
}

module.exports = {
    bodyData,
}
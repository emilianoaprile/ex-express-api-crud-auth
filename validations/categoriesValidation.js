const bodyData = {
    name: {
        in: ["body"],
        notEmpty: {
            errorMessage: 'Name della categoria è un campo obbligatorio.',
            bail: true
        },
        isString: {
            errorMessage: 'Name della categoria deve essere una stringa.',
            bail: true
        },
        isLength: {
            errorMessage: 'Name della categoria deve essere di almeno 3 caratteri',
            options: {min: 3}
        }
    }
}

module.exports = {
    bodyData,
}
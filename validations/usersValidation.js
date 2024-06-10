const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

const registerBody = {
    email: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'L\'email è obbligatoria',
            bail: true
        },
        isEmail: {
            errorMessage: 'L\'email non è valida',
            bail: true
        },
        custom: {
            options: async (value) => {
                const user = await prisma.user.findUnique({
                    where: {
                        email: value
                    }
                })
                if (user) {
                    throw new Error('L\'email è già in uso')
                }

                return true
            }
        }
    },
    name: {
        in: ['body'],
        isString: {
            errorMessage: 'Il nome deve essere una stringa',
            bail: true
        },
        isLength: {
            errorMessage: 'Il nome deve essere di almeno 3 caratteri',
            options: {min: 3}
        }
    },
    password: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'La password è obbligatoria',
            bail: true
        },
        isString: {
            errorMessage: 'La password deve essere una stringa',
            bail: true
        },
        isLength: {
            errorMessage: 'La password deve essere di almeno 8 caratteri',
            options: {min: 8}
        }
    }
}


module.exports = {
    registerBody
}
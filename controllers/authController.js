// controller per utente che si registra e si logga

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
const {generateToken, hashPassword, comparePassword } = require('../utils/utilsFunction.js');

const register = async (req, res, next) => {

    try {
        const {email, name, password} = req.body;
        const data = {
            email, 
            name,
            // password in ingresso viene criptata dalla funzione hashPassword
            password: await hashPassword(password)
        }
    
        const user = await prisma.user.create({data})
    
        // crezione del token dello user
        const token = generateToken({
            email: user.email,
            name: user.name,
        })

        res.json({token, data: user})

    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await prisma.user.findUnique({
            where: {email},
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
            }
        })

        if (!user) {
            throw new Error('Email o password errati', 400)
        }

        const isPasswordValid = await comparePassword(password, user.password)

        if (!isPasswordValid) {
            throw new Error('Email o password errati', 400)
        }

        const token = generateToken({
            email: user.email,
            name: user.name,
        })

        res.status(200).json({token, data: user})

    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login
}
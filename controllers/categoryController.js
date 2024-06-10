const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const index = async (req, res, next) => {
    try {
        const categories = await prisma.category.findMany()
        res.status(200).json(categories)
    }catch (err) {
        console.log(err)
        next(err)
    }
}


const create = async (req, res, next) => {
    const {name} = req.body;
    const data = {name}
    try {
        const categories = await prisma.category.create({data})
        res.status(200).json(categories)
    }catch (err) {
        console.log(err)
        next(err)
    }
}

const show = async (req, res, next) => {
    try {
        const id = req.params.id;
        const category = await prisma.category.findUnique({
            where: {id: parseInt(id)}
        })
        if(category) {
            res.json(category)
        } else {
            throw new Error (`Category con id ${id} non trovata`)
        }
    }catch (err) {
        console.log(err)
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const category = await prisma.category.update({
            where: {id: parseInt(id)},
            data: req.body
        })
        res.status(200).json(category)
    } catch (err) {
        console.log(err)
        next(err)
    }
}

const destroy = async (req, res, next) => {
    try {
        const id = req.params.id;
        await prisma.category.delete({
            where: {id: parseInt(id)}
        })
        res.status(200).json(`Category con id ${id} cancellata con successo`)
    } catch (err) {
        console.log(err)
        next(err)
    }
}

module.exports = {
    create,
    index,
    show,
    update,
    destroy
}
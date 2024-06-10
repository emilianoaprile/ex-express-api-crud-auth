const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const index = async (req, res, next) => {
    try {
        const tags = await prisma.tag.findMany()
        res.status(200).json(tags)
    }catch (err) {
        console.log(err)
        next(err)
    }
}


const create = async (req, res, next) => {
    const {name} = req.body;
    const data = {name}
    try {
        const tags = await prisma.tag.create({data})
        res.status(200).json(tags)
    }catch (err) {
        console.log(err)
        next(err)
    }
}

const show = async (req, res, next) => {
    try {
        const id = req.params.id;
        const tag = await prisma.tag.findUnique({
            where: {id: parseInt(id)}
        })
        if(tag) {
            res.json(tag)
        } else {
            throw new Error (`Tag con id ${id} non trovato`)
        }
    }catch (err) {
        console.log(err)
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const tag = await prisma.tag.update({
            where: {id: parseInt(id)},
            data: req.body
        })
        res.status(200).json(tag)
    } catch (err) {
        console.log(err)
        next(err)
    }
}

const destroy = async (req, res, next) => {
    try {
        const id = req.params.id;
        await prisma.tag.delete({
            where: {id: parseInt(id)}
        })
        res.status(200).json(`Tag con id ${id} cancellato con successo`)
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
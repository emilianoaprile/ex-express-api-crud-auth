const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require("dotenv").config();

const generateSlug = (title) => {
    return title.toLowerCase().split(' ').join('-');
}

const generateToken = (payload, expiresIn = '24h') => {
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn});
}

const hashPassword = async (password) => {
    const hashPassword = await bcrypt.hash(password, 10)
    return hashPassword;
}

const comparePassword = async (password, hashPassword) => {
    const isPasswordValid = await bcrypt.compare(password, hashPassword)
    return isPasswordValid;
}

module.exports = {
    generateSlug,
    generateToken,
    hashPassword,
    comparePassword
}
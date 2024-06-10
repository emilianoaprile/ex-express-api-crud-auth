const jwt = require('jsonwebtoken');
require("dotenv").config();

// MW che valida il token e protegge le rotte che richiedono l'autenticazione per accedervi

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({error: 'Non autorizzato'});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json({error: 'Non autorizzato'});
        }
        req.user = user;
        next();
    });
}
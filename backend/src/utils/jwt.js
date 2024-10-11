import jwt from "jsonwebtoken"
const KEY = "===!!ListaNegra=="

export function gerarToken(userInfo) {
    return jwt.sign(userInfo, KEY)
}

export function autenticar(req, resp, next) {
    return autenticacao (req, resp, next)
}

export function autenticacao(req, resp, next) {
    try {
        let token = req.headers['x-acess-token']
        
        if (token === undefined)
            token = req.query['x-acess-token']
    
        let signd = jwt.verify(token, KEY)
        
        req.user = signd

        next()
    } 
    catch (e) {
        resp.status(401).end()
    }
}
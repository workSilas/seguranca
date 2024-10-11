import * as BD from "../Repository/usuarioRepository.js"
import { Router } from "express";
const endpoints = Router()
import {  gerarToken } from "../utils/jwt.js";


endpoints.post('/diario/inserirUsuario/', async(req, resp) => {
    try {
        let usuario = req.body
        let resposta = await BD.inserirUsuario(usuario)       
        resp.send({
            novoId: resposta
        })
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/diario/validarUsuario/', async (req, resp) => {
    try {
        let pessoa = req.body;
        let usuario = await db.validarUsuario(pessoa);
        if (usuario == null) {
            resp.send({ erro: "Usuário ou senha incorreto(s)" })
        } else {
            let token = gerarToken(usuario);
            resp.send({
                "token": token
            })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;
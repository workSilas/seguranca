import * as BD from "../Repository/diarioRepository.js"
import { Router } from "express";
const endpoints = Router()
import { autenticar } from "../utils/jwt.js";

endpoints.get('/diario/consultarDiario/', autenticar, async(req, resp) => {
    try {
        let id = req.user.id
        let registros = await BD.consultarDiario(id)       
        resp.send(registros)
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/diario/consultarDiario/:id', autenticar, async(req, resp) => {
    try {
        let id = req.params.id
        let registros = await BD.consultarDiarioId(id)       
        resp.send(registros[0])
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/diario/inserirDiario/', autenticar, async(req, resp) => {
    try {
        let diario = req.body
        diario.idUsuario = req.user.id
        let id = await BD.inserirDiario(diario)       
        resp.send({
            novoId: id
        })
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/diario/alterarDiario/', autenticar, async(req, resp) => {
    try {
        let diario = req.body
        let resposta = await BD.alterarDiario(diario)       
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

endpoints.delete('/diario/deletarDiario/:id', autenticar, async(req, resp) => {
    try {
        let id = req.params.id
        let registros = await BD.delearDiario(id)       
        resp.send(registros[0])
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default endpoints;
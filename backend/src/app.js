import "dotenv/config"
import cors from "cors"
import Express from "express"
import Rotas from "./route.js"

const servidor = Express()

servidor.use(cors())
servidor.use(Express.json())

Rotas(servidor)
servidor.listen(process.env.PORTA, () => console.log(`-->A API subiu na porta ${process.env.PORTA}<--`))
import usuarios from "./Controller/usuarioController.js"
import diarios from "./Controller/diarioController.js"

export default function Rotas(servidor) {
    servidor.use(usuarios)
    servidor.use(diarios)
}

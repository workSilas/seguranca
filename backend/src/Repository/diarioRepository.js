import con from "./connection.js";


export async function consultarDiarioId(usuario) {
    let comando = `
    select d.dt_dia as dias, d.ds_conteudo as conteúdo, u.nm_usuario as nome
    from tb_diario  d
    join tb_usuario u
    on d.id_usuario = u.?;
    `
    let resposta = await con.query(comando, [usuario.usuarioId])
    let registro = resposta[0]
    return registro
}

export async function consultarDiario(usuario) {
    let comando = `
    select  dt_dia       dias, 
            ds_conteudo  conteúdo,
            id_usuario   id
    from    tb_diario;
    `
    let resposta = await con.query(comando, [usuario.usuarioId])
    let registro = resposta[0]
    return registro
}

export async function alterarDiario(diario, id) {
    let comando = `
    update  tb_diario 
    set     dt_dia          = ?, 
            ds_conteudo     = ?,
            id_usuario      = ?
    where   id_diario       = ?;
    `
    let resposta = await con.query(comando, [diario.data, diario.conteudo, diario.usuarioId, id])
    let registro = resposta[0]
    return registro.affectedRows
}

export async function deletarDiario(id) {   
    let comando = `
    delete  tb_diario 
    where   id_diario = ?;
    `
    let resposta = await con.query(comando, [id])
    let registro = resposta[0]
    return registro.affectedRows
}
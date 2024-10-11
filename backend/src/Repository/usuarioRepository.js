import con from "./connection.js";

export async function inserirUsuario(usuario) {
    let comando = `
    insert tb_usuario  (nm_usuario, ds_senha)
    values             (?, ?);
    `
    let resposta = await con.query(comando, [usuario.nome, usuario.senha])
    let registro = resposta[0]
    return registro.insertId
}

export async function validarUsuario(usuario) {
    const comando = `
        select 
            id_usuario id,
            nm_usuario nome
        from tb_usuario 
        where nm_usuario  = ?
          and ds_senha    = ?
    `;
    
    let registros = await con.query(comando, [usuario.nome, usuario.senha])
    return registros[0][0];
}
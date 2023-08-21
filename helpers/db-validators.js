const Cliente = require('../models/clientes');

const Personal = require('../models/personal');


const emailExiste = async( correo = '' ) => {
    //Verficar si el correo existe
    const existeEmailDeUsuario = await Cliente.findOne( { correo } );
    if ( existeEmailDeUsuario) {
        throw new Error(`El correo ${ correo }, ya esta registrado en la DB `);
    }
}

const dpiExisteenPersonal = async( dpi = '' ) => {
    //Verficar si el correo existe
    const existeEmailDeUsuario = await Cliente.findOne( { dpi } );
    if ( existeEmailDeUsuario) {
        throw new Error(`El correo ${ correo }, ya esta registrado en la DB `);
    }
}

const dpiExisteenCliente = async( dpi = '' ) => {
    //Verficar si el correo existe
    const existeEmailDeUsuario = await Cliente.findOne( { dpi } );
    if ( existeEmailDeUsuario) {
        throw new Error(`El correo ${ correo }, ya esta registrado en la DB `);
    }
}




module.exports = {
    emailExiste,
    dpiExisteenCliente,
    dpiExisteenPersonal,
}
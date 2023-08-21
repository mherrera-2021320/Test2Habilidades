const { Schema, model } = require('mongoose');

const ClaseSchema = Schema({

    fecha: {
        type: Date,
        required: [true, 'Ingresar Fecha completo, es obligatorio'],
    },

    cliente: {
        type: String,
        required: [true, 'Ingresar Nombre del Cliente, es obligatorio'],
    },

    fechaHoraInicio: {
        type: String,
        required: [true, 'Ingresar la fecha Inicio completa, es obligatorio'],
    },

    fechaHoraFinal: {
        type: String,
        required: [true, 'Ingresar la fecha Final Completa, es obligatorio'],

    },

    contrato: {
        type: Number,
        required: [true, 'Ingresar Nombre completo, es obligatorio'],

    },

    estadoCliente: {
        type: Boolean,
        default: true
    },


})

module.exports = model('Clases', ClaseSchema)
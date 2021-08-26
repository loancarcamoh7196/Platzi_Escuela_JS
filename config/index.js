/**
 * Archivo de configuración
 * Aqui estan: Variable de Entorno
 */
require('dotenv').config();

const config = {
  env: process.env.ENV || 'development',
  port: process.env.PORT || 3030,
  // msg: process.env.MSG_START || 'Porfavor, configura correctamente tu servicio'
};

module.exports = { config };

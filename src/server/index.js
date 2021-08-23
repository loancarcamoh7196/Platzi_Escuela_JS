/**
 * Punto inicio de Proyecto
 * Lado Backend
 */
require('ignore-styles');//Obliga al servidor a ignorar los llamdos de estilos css

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('asset-require-hook')({ //
  extensions: ['jpg', 'png', 'gif'],
  name: '/assets/[name].[ext]',
});// acceso a capeta assets

require('./server');// Archivo de configuracion de Servicio HTTP

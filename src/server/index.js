require('ignore-styles');//Obliga al servidor a ignorar los llamdos de estilos css

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('./server');// Archivo de configuracion de Servicio HTTP

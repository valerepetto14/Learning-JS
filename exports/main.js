let hola = require('./funciones').msg1;
let hola2 = require('./funciones').msg2;
let mensajes = require('./module-exports')
let { msg1, msg2 } = require('./module-exports') //desestructuracion

mensajes.msg1()
mensajes.msg2()
msg1()
msg2()
require('./autoLLamado')
hola()
hola2()

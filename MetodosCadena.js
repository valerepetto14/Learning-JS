cadena = "hola como estas"
cadena1 = "hola vale"
//BUSCAR
let resultado = cadena.startsWith(cadena1) //MUESTRA SI UNA CADENA COMIENZA CON LA ESPECIFICADA (TRUE OR FALSE)
resultado = cadena.endsWith(cadena1) //MUESTRA SI UNA CADENA TERMINA CON LA ESPECIFICADA (TRUE OR FALSE)
resultado = cadena.includes(cadena1) //MUESTRA SI UNA CADENA ESTA INCLUIDA EN OTRA (TRUE OR FALSE)
resultado = cadena.indexOf("vale") //DEVUELVE EL INDICE DONDE EMPIEZA LA PALABRA ESPECIFICADA EN LA CADENA
resultado = cadena.lastIndexof("vale") //DEVUELVE EL ULTIMO INDICE DONDE EMPIEZA LA PALABRA ESPECIFICADA EN LA CADENA

//RELLENAR
resultado = cadena.padStart(6,"1") //RELLENAR CADENA CON CARACTERES DESEADOS AL PRINCIPIO DE LA CADENA
resultado = cadena.padEnd(6,"1") //RELLENAR CADENA CON CARACTERES DESEADOS AL FINAL DE LA CADENA
resultado = cadena.repeat(10) //DEVUELVE LA CADENA REPETIDA LA CANTIDAD DE VECES QUE INDIQUEMOS

//
resultado = cadena.split(",") //SEPARA POR EL DIGITO LA CADENA Y LO ALMACENA EN UN ARRAY
resultado = cadena.substring(0,2) //NOS CREA UN STRING IGUAL A CADENA PERO CON EL CARACTER 1 Y 2
resultado = cadena.toLowerCase() //CONVIERTE LA CADENA A MINISCULA
resultado  = cadena.toUpperCase() //CONVIERTE LA CADENA A MAYUSCULA
resultado = cadena.trim() //REMUEVE LOS ESPACIOS DE LA CADENA
resultado = cadena.trimStart() //REMUEVE LOS ESPACIOS DEL PRINCIPIO DE LA CADENA
resultado = cadena.trimEnd() //REMUEVE LOS ESPACIOS DEL FINAL DE LA CADENA

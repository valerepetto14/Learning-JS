let nombres = ["pedro", "maria", "valentin", "daniel"]

//MODIFICAN EL ARRAY
let resultado = nombres.pop() //ELIMINA EL ULTIMO ELEMENTO DEL ARRAY Y LO MUESTRA
resultado = nombres.shift() //ELIMINA EL PRIMER ELEMENTO DE UN ARRAY
resultado = nombres.push("juan") //AGREGA JUAN AL ARRAY Y DEVUELVE SU INDICE
resultado = nombres.reverse() //REVIERTE EL ORDEN DEL ARRAY
resultado = nombres.unshift(1,2,3) //AGREGA ESOS ELEMENTOS AL ARRAY,DEVUELVE EL LENGTH DEL ARRAY
resultado = nombres.sort() //ORDENA EL ARRAY Y LO DEVUELVE 
resultado = nombres.splice(1,3,"Manuel") //ELIMINA DESDE EL ELEMENTO 1 AL 3 Y AGREGA EN SU LUGAR ESE NOMBRE

//METODOS ACCESORES 
resultado = nombres.join(" - ") //UNB EL ARRAY Y LO CONVIERTE EN UNA CADENA DE TEXTO,SE PUEDEN AGREGAR SEPARADORES
resultado = nombres.slice(0,3) // VA DEL 0 AL 2 Y CREA UN ARRAY NUEVO CON LOS DATOS DE ESAS POSICIONES




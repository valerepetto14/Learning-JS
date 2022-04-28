function SALUDAR(){
 let respuesta = prompt("cual es tu nombre");
 document.write(`hola ${respuesta}<br>`);
}

function SUMA(num1,num2){
    document.write(`la suma de ${num1}+${num2} = ${num1 + num2}<br>`)
}

const nombre = function(yourname){
    document.write(`<b>hola ${yourname}</b><br>`);
}
//FUNCION FLECHA ,si hay un parametro solo y una linea sola se puede poner asi:
const nombre1 = nombre=> document.write(`<b>hola ${nombre}</b><br>`)

//FUNCION FLECHA ESCRITA DE OTRA FORMA
const nombre2 = (nombre,nombre1)=>{
    document.write(`<b>hola ${nombre} y ${nombre1}</b><br>`);
}

SALUDAR();
SUMA(2,5);
nombre("vale")
nombre1("vale")
nombre2("vale","vale1")
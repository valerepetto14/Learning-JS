
array1 = ["pedro1", "maria1", "manuel1"];
array2 = ["pedro", "maria", array1];
array3 = {a: 1, b: 2, c: 3};

forVale: // CON ESTO LE DOY UN NOMBRE AL FOR PARA PODER BREKEARLO
for (let iter in array2){
    if(iter == 2){
        for (let iter2 of array1){
            document.write(`${iter2}<br>`);
        }
    }    
    else{
        document.write(`${array2[iter]}<br>`);
    } 
}

document.write("-----------------" + "<br>");

for (const prop in array3) {
document.write(`array3.${prop} = ${array3[prop]} <br>`);
}
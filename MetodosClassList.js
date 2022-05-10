const titulo = document.querySelector(".titulo");

titulo.classList.add("grande") //agrega grande a lo que ya tenga asignado como clase ese objeto 

titulo.classList.remove("grande"); //remueve grande del nombre de la clase

titulo.classList.item(1); //nos devuelve el segundo elemento de lo que contenga el nombre de la clase,no la modifica

titulo.classList.contains("grande"); //nos devuelve true o false segun si la clase dle objeto contiene esa palabra

titulo.classList.replace("grande","chico");//remplaza la clase grande por chico

titulo.classList.toggle("grande"); //si tiene esta clase la elimina,si no la tiene la agrega
titulo.classList.toggle("grande",true); //si tiene esta clase la deja






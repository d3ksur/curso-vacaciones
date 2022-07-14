//Variables
// las variables son espacios a los cuales se les puede reservar un valor//

var numero = 22

//----------------------------------------------------------------------------------------------//

//Constantes
// las constantes son variables pero no se pueden modificar//

PI = 3.1415

//----------------------------------------------------------------------------------------------//

//Defieniendo una variable//

function variables() {
	var nombre = new String();
	document.write("Escribe tu nombre",'<BR/>');
	nombre = prompt();
	document.write("Hola ",nombre,'<BR/>');
}
//objeto constructor
function MiSquad(nombre,apellido,edad,hobby1,hobby2,hobby3){
	this.nombre =nombre;
	this.apellido = apellido;
	this.edad =edad;
	this.hobby1 = hobby1;
	this.hobby2 = hobby2;
	this.hobby3 = hobby3;
};

var alumna1 = new MiSquad("Josefa","Herrera",21,"bailar pop","leer","estudiar");
var alumna2 = new MiSquad("Anayn", "pavez", 27, "dibujar", "pasteleria", "y andar en bici");
var alumna3 = new MiSquad("Muriel", "bahamondes", 25 , "fumar hierba", "jugar pool", "navegar en internet xd");
var alumna4 = new MiSquad("simona", "ulloa", 29, "ir a laboratoria", "comprar cosas en laboratorias", "los stickers de laboratoria");
var alumna5 = new MiSquad("Anais", "Araya", 19, "ver memes","stickers de laboratoria","programar");
var alumna6 = new MiSquad("Carolina","Quintana",21,"codear","comer","ir a laboratoria");
var alumna7 = new MiSquad("Monica","Monardes",19,"stickers","gatos","perros");
var alumna8 = new MiSquad("Camila","Pino",23,"Jugar Cartas","Jugar xbox","Jugar PC");

//OBTENER OBJETO CON EL ID ESPECIFCADO ENTRE COMILLAS "", EN ESTE CASO LISTA
var resultado1 = document.getElementById("lista1");
var resultado2 = document.getElementById("lista2");
var resultado3 = document.getElementById("lista3");
var resultado4 = document.getElementById("lista4");
var resultado5 = document.getElementById("lista5");
var resultado6 = document.getElementById("lista6");
var resultado7 = document.getElementById("lista7");
var resultado8 = document.getElementById("lista8");

//INNERHTML REMPLAZA EL VALOR DEL OBJETO OBTENIDO POR EL VALOR QUE SE LE ASIGNA
document.getElementById("nombre").innerHTML = ("<b> Squad: </b>" + "A-TÓ-MI-CO !");
resultado1.innerHTML = muestra(alumna1);
resultado2.innerHTML = muestra(alumna2);
resultado3.innerHTML = muestra(alumna3);
resultado4.innerHTML = muestra(alumna4);
resultado5.innerHTML = muestra(alumna5);
resultado6.innerHTML = muestra(alumna6);
resultado7.innerHTML = muestra(alumna7);
resultado8.innerHTML = muestra(alumna8);

/*
Una lista sin ordenar 
<ul> 
<li>Uno</li>  -> Complemento de UL es para ordenar la lista. NO NECESITO BR, PORQUE ES UNA LISTA
<li>Dos</li> 
<li>Tres</li> 
</ul> 
*/

function muestra(cumpa){
		var mostrar = ("<ul>" + " <b> Nombre:  </b>" + cumpa.nombre +"<br>" + "<b>Apellido:</b> " 
			+ cumpa.apellido+ "<br>" + "<b>Edad:</b> " + cumpa.edad + "<br>" + "<b>Hobbies:</b> <ul>" 
			+ "<li>" +cumpa.hobby1 + "</li> <li>"+ cumpa.hobby2 + "</li> <li>" + cumpa.hobby3 + 
			"</li> </ul>");
		return mostrar;
		};
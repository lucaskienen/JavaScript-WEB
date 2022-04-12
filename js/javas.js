console.log("Teste");

var titulo = document.querySelector(".titulo");
		console.log(titulo);
		console.log(titulo.textContent);

		titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length ; i++) {

var paciente = pacientes[i];


var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdaluta = paciente.querySelector(".info-altura");
var altura = tdaluta.textContent;


var pesoEhValido = true;
var alturaEhValida = true;

if (peso > 1000 || peso < 0){
	pesoEhValido = false;
}

if (altura > 3.00 || altura < 0){
	alturaEhValida = false;
}


if (alturaEhValida && pesoEhValido){
var IMC = peso/(altura*altura);
var tdIMC = paciente.querySelector(".info-imc");
tdIMC.textContent = IMC.toFixed(2);
}



	
}


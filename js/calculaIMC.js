var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length ; i++) {

var paciente = pacientes[i];


var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdaluta = paciente.querySelector(".info-altura");
var altura = tdaluta.textContent;


var tdIMC = paciente.querySelector(".info-imc") 


var pesoEhValido = true;
var alturaEhValida = true;

if (peso > 1000 || peso < 0){
	console.log("Peso inválido");
	pesoEhValido = false;
	tdIMC.textContent = "Peso inválido";
	paciente.classList.add("paciente-invalido");
}

if (altura > 3.00 || altura < 0){
	alturaEhValida = false;
}


if (alturaEhValida && pesoEhValido){
var IMC = calculaIMC (peso, altura)
//var tdIMC = paciente.querySelector(".info-imc");
tdIMC.textContent = IMC;
	}
}

function calculaIMC(peso, altura){
	var IMC = 0;

	IMC = peso / (altura*altura);

	return IMC.toFixed(2);
}
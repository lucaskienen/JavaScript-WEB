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
var IMC = peso/(altura*altura);
var tdIMC = paciente.querySelector(".info-imc");
tdIMC.textContent = IMC.toFixed(2);
}

	
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
	event.preventDefault();
	console.log("acionado");

	var form = document.querySelector("#form-adiciona");

	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	var pacienteTr = document.createElement("tr");

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);



});


titulo.addEventListener("click", function(){
	console.log("teste");
});

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes= document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
 var pesoEhvalido = true;
var alturaEhvalido = true;

if(peso <= 0 || peso >= 1000){
    console.log("peso inválido");
    pesoEhvalido = false;
    tdImc.textContent = "peso inválido"
    paciente.style.color = "blue"
}

if(altura <= 0 || altura >= 3.00 ){
    console.log("altura inválida!");
    alturaEhvalido = false;
    tdImc.textContent = "Altura inválida!"
}

if(alturaEhvalido && pesoEhvalido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);

}


}


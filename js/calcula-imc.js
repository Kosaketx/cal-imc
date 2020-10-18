var titulo = (document.querySelector(".titulo"));
titulo.textContent ="Estudo de JavaScript";



var pacientes = document.querySelectorAll(".paciente");


for( var i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;


  var tdImc = (paciente.querySelector(".info-imc"));


  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if(!pesoEhValido){
    pesoEhValido =false;
    tdImc.textContent = "Peso invalido!";
    paciente.classList.add("paciente-invalido")
  }

  if(!alturaEhValida){
    alturaEhValida = false;
    tdImc.textContent = "Altura Invalida!";
    paciente.classList.add("paciente-invalido")
  }

  if( pesoEhValido && alturaEhValida){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso,altura){ // função que calcula o imc precisa receber como parameto o peso e altura
  var imc = 0;

  imc = peso / (altura*altura);

  return imc.toFixed(2)
}

function validaPeso(peso){
   if(peso >= 0 && peso < 150){
     return true;
   }else{
     return false;
   }
}
function validaAltura(altura){
   if(altura >= 1.00 && altura < 2.00){
     return true;
   }else{
     return false;
   }
}

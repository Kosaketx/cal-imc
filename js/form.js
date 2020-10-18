var botaoAdicionar = document.querySelector("#adicionar-paciente");
  botaoAdicionar.addEventListener("click",function(event) {

      event.preventDefault();

      var form = document.querySelector("#form-adiciona");
      // extrai informaçoes do paciente do formulario

      var paciente = obtemPacienteDoForm(form);

      var erros = validapaciente(paciente);
      console.log(erros);
      if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return; // retorna a função vazia e nao adiciona o paciente
      }
      adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
  // cria a td e tr do paciente
    var pacienteTr = montaTr(paciente);
      // adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPacienteDoForm(form){
    var paciente = { // objeto

      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
      }
    return paciente;
}


function montaTr(paciente){
  var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd (paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}


function montaTd(dado,classe){

  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validapaciente(paciente){

  var erros = [];
  if(paciente.nome.length == 0){
    erros.push("Nome do paciente não pode ser em branco")
  }

  if(paciente.gordura.length == 0){
    erros.push("A gordura do paciente não pode ser em branco")
  }

  if(paciente.altura.length == 0){
    erros.push("A altura não pode ser em branco")
  }

  if(paciente.peso.length == 0){
    erros.push("A peso do paciente não pode ser em branco")
  }

  if(!validaPeso(paciente.peso)) {
    erros.push("Peso é invalido!");
  }

  if(!validaAltura(paciente.altura)) {
    erros.push("Altura é invalida!");
  }

    return erros;

}

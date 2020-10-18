var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){ //pega os caracteres digitados no campo de filtro//
  console.log(this.value);    //Utilizaremos a palavra de contexto this, referente ao próprio dono do evento.
  var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {      //if para que a classe invisivel seja adicionada apenas quando houver algo digitado
      for (var i = 0; i < pacientes.length; i++) { // No entanto, queremos fazer a comparação com o nome dos pacientes, não com a tr. Precisaremos iterar sobre os pacientes, para então acessarmos o nome de cada um:
          var paciente = pacientes[i];
          var tdNome = paciente.querySelector(".info-nome");
          var nome = tdNome.textContent;
          var expressao = new RegExp(this.value,"i") //expressão regular, Vamos gerar um objeto especial do JS, adicionando new e o nome RegExp():| Devem ser buscadas tanto letras maiúsculas como minúsculas, e passaremos a letra "i" como segundo parâmetro,
          if (!expressao.test(nome)) {
            paciente.classList.add("invisivel");
          }else{
            paciente.classList.remove("invisivel");
          }
        }
      }else{
        for (var i = 0; i < pacientes.length; i++) {
          var paciente = pacientes[i];
          paciente.classList.remove("invisivel");
        }
      }
});

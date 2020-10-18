var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function() { //chama uma função anonima, qualquer.
  var xhr = new XMLHttpRequest(); //https://cursos.alura.com.br/course/javascript-programando-na-linguagem-web/task/24363( descrição do xhr)
  //O objeto XMLHttpRequest é quem é responsável por fazer requisições HTTP assíncronas com Javascript.
  // Apesar de ter o XML no nome hoje em dia este objeto pode trafegar diversos outros tipos de dados além do XML, este nome só se manteve devido a um legado histórico.
  xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load",function() {
      var erroAjax = document.querySelector("#erro-ajax");

      if (xhr.status == 200) {
        erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente){
          adicionaPacienteNaTabela(paciente);
        });
      } else {
        erroAjax.classList.remove("invisivel");
      }
    });
  xhr.send();
});

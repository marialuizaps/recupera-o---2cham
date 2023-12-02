var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);
    var erros = validaPaciente(paciente)
    
    if(erros.length > 0){
        function exibeMensagensDeErro(erros){
       return;
        }
    }
});
    if (!validaPaciente(paciente)) {
        console.log("Paciente inválido");
         return;
    }
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";

    function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
<li></li>



function obtemPacienteDoFormulario(form) {
    var paciente = 
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    imc: calculaImc(form.peso.value, form.altura.value);
    
    return paciente;
}
    function montaTr(paciente){
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");
    
        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add("info-nome");
    td.textContent = paciente.nome;

return td;
}
function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }
    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }
    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }
    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }
    if (!validaPeso(paciente.peso)){
         erros.push("peso é invalido");
    }
    if (!validaAltura(paciente.altura)){ 
        erros.push("altura é invalida!");
    }
        
    
    
}


var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var formulario = document.querySelector("#adicionar-formulario");

    var paciente = obtemPacienteDoFormulario(formulario);

    var pacienteTr = montaTr(paciente);

    erros = validaPaciente(paciente);

    console.log(erros);

    if (erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    formulario.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function obtemPacienteDoFormulario(formulario){

    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value)
    }

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

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("Preencha o nome do paciente!");
    }

    if(paciente.peso.length == 0){
        erros.push("Preencha o peso do paciente!");
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso inválido!");
    }

    if(paciente.altura.length == 0){
        erros.push("Preencha a altura do paciente!");
    }

    if(!validaAltura(paciente.altura)) {
        erros.push("Altura inválida!");
    }

    if(paciente.gordura.length == 0){
        erros.push("Preencha a gordura do paciente!");
    }

    return erros;
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
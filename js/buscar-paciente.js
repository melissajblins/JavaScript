var campoBusca = document.querySelector("#buscar-tabela");

campoBusca.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
   
   if(this.value.length > 0){
    for(var linha = 0; linha < pacientes.length; linha++){
        var paciente = pacientes[linha];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;

        var expressao = new RegExp(this.value, "i");

        if(!expressao.test(nome)){
            paciente.classList.add("esconder-paciente");
        } else {
            paciente.classList.remove("esconder-paciente");
        }
    }
   } else {
        for(var linha = 0; linha < pacientes.length; linha++){
            var paciente = pacientes[linha];
            paciente.classList.remove("esconder-paciente");
        }
   }
});
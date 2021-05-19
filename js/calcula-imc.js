var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista Aparecida";

titulo.addEventListener("click", function(){
    console.log("Olá, meu nome é Aparecida e esta é minha página!");
});

var pacientes = document.querySelectorAll(".paciente");

for (var linha = 0; linha < pacientes.length; linha++){
    
    var paciente = pacientes[linha];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida){
        var imc = (peso)/(altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
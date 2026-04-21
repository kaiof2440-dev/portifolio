const botaoMenu = document.getElementById('botaoMenu');
const menuNav = document.getElementById('menuNav');
const botaoMensagem= document.getElementById('botaoMensagem');
const mensagem = document.getElementById('mensagem');
const contador = document.getElementById('contador');

function abrirEFechar() {
    menuNav.classList.toggle('ativo');
}
botaoMenu.addEventListener('click',abrirEFechar);

function enviar(event){
    event.preventDefault();

    let nome= document.getElementById('nome');
    let email= document.getElementById('email');
    let mensagemDoCliente = document.getElementById('mensagem');
    
    let mensagemDeErro = [];
    var enviou= true;
    
    if("" === nome.value.trim()){
        mensagemDeErro.push("nome");
        enviou=false;
    }
    if(""=== email.value.trim()){
        mensagemDeErro.push("email");
        enviou=false;
    }
    if("" === mensagemDoCliente.value.trim()){
        mensagemDeErro.push("mensagem");
        enviou=false;
    }
    if(enviou){
        alert("Mensagem enviada com sucesso.");
    }
    else{
        alert("Ops, esqueceu de escrever no(s) campo(s) de " + mensagemDeErro.join(", "));
    }
}
function contar(){
    let quantidade = mensagem.value.length;
    contador.textContent = quantidade + " caracteres";
}

botaoMensagem.addEventListener('click',enviar);
mensagem.addEventListener('input',contar);
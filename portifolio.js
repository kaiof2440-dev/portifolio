/*Menu de navegação responsivo para dispositivos móveis: um botão (ex: ícone hambúrguer)
que abre e fecha o menu ao ser clicado.                FEITO >:DDDDDDDDDDD             */
const botaoMenu = document.getElementById('botaoMenu');
const menuNav = document.getElementById('menuNav');
function abrirEFechar() {
    menuNav.classList.toggle('ativo');
}
botaoMenu.addEventListener('click',abrirEFechar);
/*Validação do formulário de contato: ao clicar em “Enviar”, verificar se os campos estão
preenchidos e exibir uma mensagem de erro caso estejam vazios.              FEITO VAMOS >:DDDDDDDDDDDDDDDDDDD          */
const botaoMensagem= document.getElementById('botaoMensagem');
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
botaoMensagem.addEventListener('click',enviar);
/*Uma interação adicional à escolha da dupla. Exemplos: alternância entre tema claro e
escuro (dark mode), carrossel de imagens, contador de caracteres no campo de mensagem,
animação de entrada de elementos ao rolar a página, etc.*/
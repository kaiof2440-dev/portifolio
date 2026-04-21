/*Menu de navegação responsivo para dispositivos móveis: um botão (ex: ícone hambúrguer)
que abre e fecha o menu ao ser clicado.                FEITO >:DDDDDDDDDDD             */
const buttonMenu = document.getElementById('buttonMenu');
const menuNav = document.getElementById('menuNav');
function abrirEFechar() {
    menuNav.classList.toggle('ativo');
}
buttonMenu.addEventListener('click',abrirEFechar);
/*Validação do formulário de contato: ao clicar em “Enviar”, verificar se os campos estão
preenchidos e exibir uma mensagem de erro caso estejam vazios.*/


/*Uma interação adicional à escolha da dupla. Exemplos: alternância entre tema claro e
escuro (dark mode), carrossel de imagens, contador de caracteres no campo de mensagem,
animação de entrada de elementos ao rolar a página, etc.*/
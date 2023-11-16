
function toggleMenu() {
    var menu = document.querySelector('.menu ul');
    menu.classList.toggle('show');
}
function toggleDescricao() {
    var conteudoAdicional = document.querySelector('.conteudoAdicional');

    // Toggle para mostrar ou ocultar o conteúdo adicional
    if (conteudoAdicional.style.display === 'block') {
        conteudoAdicional.style.display = 'none';
    } else {
        conteudoAdicional.style.display = 'block';

        // Rolamento suave para o conteúdo adicional
        conteudoAdicional.scrollIntoView({ behavior: 'smooth' });
    }
}
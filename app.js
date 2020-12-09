const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


function iniciaModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target == modal || e.target.className == 'fechar'){
            modal.classList.remove('mostrar');
        }
    })
}
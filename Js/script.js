document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.saiba-mais').forEach(button => {
        button.addEventListener('click', () => {
            const url = button.getAttribute('data-url');
            window.location.href = url;
        });
    });
});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../Imagens/menu_black.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../Imagens/close_menu.png";
    }
}

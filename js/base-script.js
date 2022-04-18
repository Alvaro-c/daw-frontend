window.addEventListener('DOMContentLoaded', menus);


//This function makes the nav bar menus collapsable
function menus() {

    let links = document.getElementById('mobile-menu'); // Lo que oculto
    document.addEventListener('click', toggleLinks); // Lo que hago

    // Menu with mobile screen
    function toggleLinks() {

        let hamburger = document.getElementById('hamburger');
        if (!(hamburger.offsetParent === null)) {
            links.classList.toggle('hidden');
        }

    }

    // Menu with whide screen
    document.getElementById('user-menu-button')
        .addEventListener('click', () => {
            let menu = document.querySelector('[role=menu]');
            menu.classList.toggle('hidden');
        });



}




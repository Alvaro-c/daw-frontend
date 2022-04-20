window.addEventListener('DOMContentLoaded', start);

function start() {

    // Load data into the dropdown menus
    loadInfo();

}


function loadInfo() {

    let id = new URLSearchParams(window.location.search).get('id');
    let message = findMessageById(id, fillForm);

    function fillForm(message) {

        document.getElementById('user').value = message.user.name;
        document.getElementById('body').value = message.body;
    }


}
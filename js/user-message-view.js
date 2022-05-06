window.addEventListener('DOMContentLoaded', start);

function start() {

    if (isLoged()) {
        // Load data into the dropdown menus
        loadInfo();

    } else {
        window.location.href = "./index.html";
    }

}


function loadInfo() {

    let id = new URLSearchParams(window.location.search).get('id');
    let message = findMessageById(id, fillForm);

    function fillForm(message) {

        document.getElementById('body').value = message.body;
    }


}
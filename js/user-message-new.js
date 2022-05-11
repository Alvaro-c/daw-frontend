// Code to start executing script when DOM ready
window.addEventListener('DOMContentLoaded', start);

function start() {

    if (isLoged() || isAdmin()) {

        document.getElementById('form').addEventListener('submit', submitForm);

        // Load data into the dropdown menus

    } else {
        window.location.href = "./index.html";
    }

    // Controll the form submission
    function submitForm(e) {
        e.preventDefault();

        let message = getFormInfo();
        addMessage(message);
        window.location.href = "./profile.html";
    }

    // Gets info inputed by the user in the form
    function getFormInfo() {

        let user = document.cookie.split('&')[0];
        let userId = user.split('=')[1];

        let body = document.getElementById('body').value;
        let date = now();


        let message = {
            'body': body,
            'date': date,
            'user': {
                'id': userId
            },
        }

        return message;

    }


}

// Gives today date in input type date format
function now() {
    Date.prototype.toDateInputValue = (function () {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
    });

    return new Date().toDateInputValue();
}
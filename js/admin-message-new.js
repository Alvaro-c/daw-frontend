// Code to start executing script when DOM ready
window.addEventListener('DOMContentLoaded', start);

function start() {

    // Check user permissions, if so load the rest of functions, if not, redirects to index
    if (isAdmin()) {

        document.getElementById('form').addEventListener('submit', submitForm);

        // Load data into the dropdown menus
        findAllUsers(loadUsers);

    } else {
        window.location.href = "./index.html";
    }

    // Controll the form submission
    function submitForm(e) {
        e.preventDefault();

        let message = getFormInfo();
        addMessage(message);
        window.location.href = "./admin-message.html";
    }

    // Gets info inputed by the user in the form
    function getFormInfo() {

        let user = document.getElementById('user').value;
        let body = document.getElementById('body').value;
        let date = now();


        let message = {
            'body': body,
            'date': date,
            'user': {
                'id': user
            },
        }

        return message;

    }


}

// Retrieves user info and create them as a drop down list
function loadUsers(users) {

    let select = document.getElementById('user');
    for (let i = 0; i < users.length; i++) {

        let option = document.createElement('option');
        option.setAttribute('value', `${users[i].id}`)
        option.innerHTML = users[i].name;
        select.appendChild(option);
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
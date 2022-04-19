window.addEventListener('DOMContentLoaded', start);

function start() {

    document.getElementById('form').addEventListener('submit', submitForm);

    // Load data into the dropdown menus
    findAllUsers(loadUsers);

    // Controll the form submission
    function submitForm(e) {
        e.preventDefault();

        let message = getFormInfo();
        console.log(message);
        addMessage(message);
        window.location.href = "../admin-message.html";
    }

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


function loadUsers(users) {

    let select = document.getElementById('user');
    for (let i = 0; i < users.length; i++) {

        let option = document.createElement('option');
        option.setAttribute('value', `${users[i].id}`)
        option.innerHTML = users[i].name;
        select.appendChild(option);
    }

}


function now(){
    Date.prototype.toDateInputValue = (function () {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
    });

    return new Date().toDateInputValue();
}
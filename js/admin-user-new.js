// Code to start executing script when DOM ready
window.addEventListener('DOMContentLoaded', start);

function start() {

    if (isAdmin()) {

        document.getElementById('form').addEventListener('submit', submitForm);

    } else {
        window.location.href = "./index.html";
    }

    function submitForm(e) {
        e.preventDefault();

        let user = getFormInfo();
        addUser(user);
        window.location.href = "./admin-user.html";
    }

    function getFormInfo() {

        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let rol = document.getElementById('rol').value;
        // let image = document.getElementById('image').files[0];

        let user = {
            'name': name,
            'surname': surname,
            'phone': phone,
            'email': email,
            'password': password,
            'rol': rol,
        }

        return user;

    }


}
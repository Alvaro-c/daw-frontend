window.addEventListener('DOMContentLoaded', start);


function start() {

    document.getElementById('login-form').addEventListener('submit', submitForm);


    function submitForm(e) {
        e.preventDefault();

        let user = getFormInfo();
        login(user, checkAccess);
        // window.location.href = "../admin.html";
    }

    function getFormInfo() {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let user = {
            'email': email,
            'password': password,
        }

        return user;

    }

    function checkAccess(response) {

        console.log(response);

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        if (response.email == email && response.password == password) {
            window.location.href = "../admin.html";
        } else {
            window.location.href = "../test.html";
        }

    }


}
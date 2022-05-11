// Code to start executing script when DOM ready
window.addEventListener('DOMContentLoaded', start);
let photo;
function start() {

    // Check user permissions, if so load the rest of functions, if not, redirects to index
    if (isAdmin()) {

        loadInfo();

    } else {
        window.location.href = "./index.html";
    }


    document.getElementById('form').addEventListener('submit', submitForm);

    // Handles form submission
    function submitForm(e) {
        e.preventDefault();

        let id = new URLSearchParams(window.location.search).get('id');
        let user = getFormInfo();
        editUser(id, user);
        window.location.href = "./admin-user.html";
    }

    // Gets info inputed by the user in the form
    function getFormInfo() {

        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let rol = document.getElementById('rol').value;

 

        let user = {
            'name': name,
            'surname': surname,
            'phone': phone,
            'email': email,
            'password': password,
            'rol': rol,
            'photo': photo
        }  

        return user;

    }

    // Loads the information of the object that is being edited into the form
    function loadInfo() {

        let id = new URLSearchParams(window.location.search).get('id');
        let user = findUserById(id, fillForm);
        

        function fillForm(user) {
            document.getElementById('name').value = user.name;
            document.getElementById('surname').value = user.surname;
            document.getElementById('phone').value = user.phone;
            document.getElementById('email').value = user.email;
            document.getElementById('password').value = user.password;
            document.getElementById('rol').value = user.rol;
            photo = user.photo
        }


    }


}
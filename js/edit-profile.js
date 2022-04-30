window.addEventListener('DOMContentLoaded', start);

function start() {
    
    loadInfo();

    document.getElementById('form').addEventListener('submit', submitForm);

    function submitForm(e) {
        e.preventDefault();

        let id = new URLSearchParams(window.location.search).get('id');
        
        let user = getFormInfo();
        editUser(id, user);
        window.location.href = `./profile.html?id=${id}`;
    }

    function getFormInfo() {

        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;


        let user = {
            'name': name,
            'surname': surname,
            'phone': phone,
            'email': email,
            'password': password,
        }

        return user;

    }

    function loadInfo() {

        let id = new URLSearchParams(window.location.search).get('id');
        let user = findUserById(id, fillForm);

        console.log(user);

        function fillForm(user) {
            document.getElementById('name').value = user.name;
            document.getElementById('surname').value = user.name;
            document.getElementById('phone').value = user.phone;
            document.getElementById('email').value = user.email;
            document.getElementById('password').value = user.password;
        }


    }


}
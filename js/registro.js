window.addEventListener('DOMContentLoaded', start)

function start() {
    
    document.getElementById('submit').addEventListener('click', send)

}

function send(e){

    e.preventDefault()

    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;
    

    if (password == password2) {

        let user = {
            'name': name, 
            'surname': surname, 
            'phone': '', 
            'email': email, 
            'password': password, 
            'rol': 0
        }
        addUser(user)
        window.location.href = "../login.html";
    }
}


// Code to start executing script when DOM ready
window.addEventListener('DOMContentLoaded', start);


function start() {

    document.getElementById('login-form').addEventListener('submit', submitForm);

    // Function to handle form submission
    function submitForm(e) {
        e.preventDefault();

        let user = getFormInfo();
        login(user, checkAccess); 

    }

    // Gets info inputed by the user in the form
    function getFormInfo() {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let user = {
            'email': email,
            'password': password,
        }

        return user;

    }

    // Check if data is correct and if so, session cookie is created
    function checkAccess(response) {

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        

        if (response.email == email && response.password == password) {
            
            document.cookie = `user=${response.id}&rol=${response.rol}`; // Session is created with the rol
            window.location.href = "./index.html"; 
            
        } else {
            window.location.href = "./index.html";
        }

    }

}
window.addEventListener('DOMContentLoaded', start);


function start() {

    document.getElementById('login-form').addEventListener('submit', submitForm);


    function submitForm(e) {
        e.preventDefault();

        let user = getFormInfo();
        login(user, checkAccess); 

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

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        

        if (response.email == email && response.password == password) {
            let session = response.rol; // Session is created
            
            window.location.href = "../admin.html"; 
        } else {
            window.location.href = "../test.html";
        }

    }

    //document.getElementById('test').addEventListener('click', getUserSession)

    function getUserSession(){
        checkUserSession()

    }


}
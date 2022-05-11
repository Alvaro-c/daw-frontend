// Checks if the cookie is present and if so check user permissions
function checkCookie() {

    //Check if cookie present
    if (document.cookie.split('=')[1] != undefined) {

        // If so, return the user rol
        findUserById(document.cookie.split('=')[1], accessControl);

    }


}

// Check the user's permissions
function accessControl(){
    isLoged()
    isAdmin()
}

// Check if user loged
function isLoged(){

    //Check if cookie present
    if (document.cookie.split('=')[1] != undefined) {

        // If so, return the user rol
        let cookieParams = document.cookie.split('&')[1];
        let rol = cookieParams.split('=')[1];
        if (rol == 0) {
            return true;
        }

    }
    return false;

}

// Check if user is admin
function isAdmin() {

    //Check if cookie present
    if (document.cookie.split('=')[1] != undefined) {

        // If so, return the user rol
        let cookieParams = document.cookie.split('&')[1];
        let rol = cookieParams.split('=')[1];

        if (rol == 1) {
            return true;
        }

    }
    return false;


}


// Function to end session
function deleteCookie() {
    let name = 'user';
    let path = '/daw-frontend';
    let domain = 'localhost';
    if (getCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? ";path=" + path : "") +
            ((domain) ? ";domain=" + domain : "") +
            ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
    window.location.href = "./index.html";
}

// Function to get cookie info
function getCookie(name){
    return document.cookie.split('&').some(c => {
        return c.trim().startsWith(name + '=');
    });
}


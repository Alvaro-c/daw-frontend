function checkCookie() {

    //Check if cookie present
    if (document.cookie.split('=')[1] != undefined) {

        // If so, return the user rol
        findUserById(document.cookie.split('=')[1], accessControl);

    }


}

function accessControl(){
    isLoged()
    isAdmin()
}

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

function getCookie(name){
    return document.cookie.split('&').some(c => {
        return c.trim().startsWith(name + '=');
    });
}


// Code to start executing script when DOM ready
window.addEventListener('DOMContentLoaded', start);

let currentRol;
let newPhoto;

function start() {
    
    loadInfo();

    document.getElementById('form').addEventListener('submit', submitForm);
    // Load new photo
    let photo = document.getElementById('profile-photo');
    
    // If new photo is loaded, it changes value for image into new base64 coded image
    photo.addEventListener('change', () => {
        
        encodeImageFileAsURL(photo)

    });

    function submitForm(e) {
        e.preventDefault();

        let id = new URLSearchParams(window.location.search).get('id');
        
        let user = getFormInfo();
        editUser(id, user);
        window.location.href = `./profile.html?id=${id}`;
    }

    // Gets info inputed by the user in the form
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
            'rol': currentRol, 
            'photo': newPhoto
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
            currentRol = user.rol;
            newPhoto = user.photo;

        }


    }


}

// Transform image loaded in input type file into base64 image
function encodeImageFileAsURL(element) {

    let file = element.files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
        newPhoto = reader.result
    }

    reader.readAsDataURL(file);
}
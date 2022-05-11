// Code to start executing script when DOM ready
window.addEventListener('DOMContentLoaded', start);

let userId;

function start() {
    setDatePicker();
    productRevAndFaq();
    loadProduct();
    setCancelButton();
    document.getElementById('confirm-booking').addEventListener('click', confirmBooking);
    showAvail();
    loadCaptcha();

    if (document.cookie.split('=')[1] != undefined) {
        // If the user is registered
        let user = document.cookie.split('&')[0];
        userId = user.split('=')[1];

        findUserById(userId, loadUser);

    }

}

// Function to change between FAQ and Customer reviews
function productRevAndFaq() {

    let reviews = document.getElementById('tab-panel-reviews');
    let faq = document.getElementById('tab-panel-faq');


    document.getElementById('tab-reviews')
        .addEventListener('click', () => {

            if ((reviews.offsetParent === null)) {
                reviews.classList.toggle('hidden');
                faq.classList.toggle('hidden');
            }

        });

    document.getElementById('tab-faq')
        .addEventListener('click', () => {
            if ((faq.offsetParent === null)) {
                reviews.classList.toggle('hidden');
                faq.classList.toggle('hidden');
            }

        });


}

// Load information of the product in the HTML
function loadProduct() {

    let id = new URLSearchParams(window.location.search).get('id');
    findProductById(id, (product) => {

        document.getElementById('product-image').setAttribute('src', product.image);
        document.getElementById('product-name').innerHTML = product.name;


    })


}

// Set the route for the cancel button to go to previous profile page
function setCancelButton() {

    let id = new URLSearchParams(window.location.search).get('id');
    let cancelButton = document.getElementById('cancel-booking');
    cancelButton.setAttribute('href', `./product.html?id=${id}`);

}


// Function to check information loaded in the form and submit it as booing after info is validated
function confirmBooking(e) {

    e.preventDefault();
    document.getElementById('form').checkValidity();

    let id = new URLSearchParams(window.location.search).get('id');

    let adults = document.getElementById('adults').value;
    let children = document.getElementById('children').value;
    let date = document.getElementById('date').value;
    let comments = document.getElementById('comments').value;
    let user = userId;


    let booking;
    let avail = document.getElementById('current-avail').innerHTML;



    if (parseInt(avail) >= parseInt(adults) + parseInt(children)) {

        if (!captcha()) {
            document.getElementById('captcha-error').innerHTML = 'Revisa tu respuesta';
            return
        }

        if(!formValidation()){
            return
        }


        // If registered or admin, booking info from profile
        if (isLoged() || isAdmin()) {

            let user = document.cookie.split('&')[0];
            userId = user.split('=')[1];

            booking = {
                'adults': adults,
                'children': children,
                'bookingDate': now(),
                'date': date,
                'comments': comments,
                'user': {
                    'id': userId,
                },
                'product': {
                    'id': id
                }
            }

            newBookingFromUser(booking);

        } else {

            // If not, new user is created
            let name = document.getElementById('name').value;
            let surname = document.getElementById('surname').value;
            let phone = '1234';
            let email = document.getElementById('email').value;
            let password = 'default';
            let rol = 0;
            let photo = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAEsAAAAAQAAASwAAAAB/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAQAAAgAEAP/hDIFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMC4xMCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICA8dGlmZjpYUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpYUmVzb2x1dGlvbj4KICA8dGlmZjpZUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpZUmVzb2x1dGlvbj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnN0b2NrOjQ5ZDRhN2FlLTI1NjYtNDY5Yi05NmI5LWUxYzAxM2JiNmEwYzwveG1wTU06RG9jdW1lbnRJRD4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjUxYWY0OTY0LWE4MjQtNDk1Yy04MzgzLTQ3OTYxMzNjMzY2YjwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/8AACwgBaAFoAQERAP/EABsAAQADAQEBAQAAAAAAAAAAAAAFBgcEAgMB/8QAPhABAAEDAgIECA0EAgMAAAAAAAECAwQFBhEhEjFBUQcTNmFzgbHRFSIkMkJSU2JxcpGhwRQjk+GC8RY0Vf/aAAgBAQAAPwDXQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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`;


            let newUser = {

                'name': name,
                'surname': surname,
                'phone': phone,
                'email': email,
                'password': password,
                'rol': rol,
                'photo': photo,
            }

            booking = {
                'adults': adults,
                'children': children,
                'bookingDate': now(),
                'date': date,
                'comments': comments,
                'user': {
                    'id': 6, // As placeholder, it is changed during the fetch request
                },
                'product': {
                    'id': id
                }

            }


            addUserAndBooking(newUser, booking);

        }

    } else {
        document.getElementById('avail-error').innerHTML = 'No hay suficientes plazas libres';
    }
}


// Gives today date in input type date format
function now() {
    Date.prototype.toDateInputValue = (function () {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
    });

    return new Date().toDateInputValue();
}


// Function that show how many people can book for a specific date
function showAvail() {

    let id = new URLSearchParams(window.location.search).get('id');
    let date = document.getElementById('date');
    let avail;

    date.addEventListener('change', updateAvail);

    function updateAvail() {

        document.getElementById('avail-error').innerHTML = '';

        let booking = {
            'date': date.value,
            'product': {
                'id': id
            }
        }

        let avail = getAvailability(booking, (result) => {

            let availField = document.getElementById('availability');
            if (availField.offsetParent === null) {
                availField.classList.toggle('hidden');
            }
            let currentAvail = document.getElementById('current-avail');
            currentAvail.innerHTML = result;
        });


    }
    updateAvail();


}

// Sets todays date on the input type date
function setDatePicker() {
    Date.prototype.toDateInputValue = (function () {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
    });
    let datePicker = document.getElementById('date');

    datePicker.value = new Date().toDateInputValue();
    datePicker.setAttribute('min', new Date().toDateInputValue())


}


// Function to load user information in the form
function loadUser(user) {


    document.getElementById('name').value = user.name;
    document.getElementById('surname').value = user.surname;
    document.getElementById('email').value = user.email;


}


// If the booking has been successful, this function is called to show a thank you message
function thankYou() {

    let form = document.getElementById('form');

    form.innerHTML = ``;
    form.innerHTML = `
    <div class="mt-4">
        <h1 id="product-name"
            class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Tú reserva está confirmada. Muchas gracias por reservar con nosotros.
        </h1>
    </div>`;

}

// If the booking has been unsuccessful, this function is called to show an error message
function bookingError() {

    let form = document.getElementById('form');

    form.innerHTML = ``;
    form.innerHTML = `
    <div class="mt-4">
        <h1 id="product-name"
            class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Lo sentimos, ha ocurrido un error, no se ha podido efectuar la reserva.
        </h1>
    </div>`;

}

// Function to create the captcha
function loadCaptcha() {

    document.getElementById('num1').innerHTML = Math.floor(Math.random() * (0 - 5 + 1) + 5);
    document.getElementById('num2').innerHTML = Math.floor(Math.random() * (0 - 5 + 1) + 5);
}

// Function to validate the captcha
function captcha() {

    let num1 = document.getElementById('num1').innerHTML
    let num2 = document.getElementById('num2').innerHTML
    let captcha = document.getElementById('captcha').value;

    if (captcha == (parseInt(num1) + parseInt(num2))) {
        return true;
    }
    return false

}

// Function to validate fields in the form
function formValidation() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name == '') {
        return false
    }
    if (email == '') {
        return false
    }
    if (!validateEmail(email)) {
        return false
    }
    return true
}

// Function to validate email
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
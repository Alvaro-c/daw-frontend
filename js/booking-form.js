window.addEventListener('DOMContentLoaded', start);

let userId;

function start() {
    setDatePicker();
    productRevAndFaq();
    loadProduct();
    setCancelButton();
    document.getElementById('confirm-booking').addEventListener('click', confirmBooking);
    showAvail();

    console.log('loged', isLoged(), 'admin', isAdmin());

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

function loadProduct() {

    let id = new URLSearchParams(window.location.search).get('id');
    findProductById(id, (product) => {

        document.getElementById('product-image').setAttribute('src', product.image);
        document.getElementById('product-name').innerHTML = product.name;


    })


}

function setCancelButton() {

    let id = new URLSearchParams(window.location.search).get('id');
    let cancelButton = document.getElementById('cancel-booking');
    cancelButton.setAttribute('href', `./product.html?id=${id}`);

}

function confirmBooking(e) {

    e.preventDefault();

    let id = new URLSearchParams(window.location.search).get('id');

    let adults = document.getElementById('adults').value;
    let children = document.getElementById('children').value;
    let date = document.getElementById('date').value;
    let comments = document.getElementById('comments').value;
    let user = userId;


    let booking;
    let avail = document.getElementById('current-avail').innerHTML;

    if (parseInt(avail) >= parseInt(adults) + parseInt(children)) {


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

            let newUser = {

                'name': name,
                'surname': surname,
                'phone': phone,
                'email': email,
                'password': password,
                'rol': rol,
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

function now() {
    Date.prototype.toDateInputValue = (function () {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
    });

    return new Date().toDateInputValue();
}

function showAvail() {
    let id = new URLSearchParams(window.location.search).get('id');
    let date = document.getElementById('date');
    let avail;

    date.addEventListener('change', () => {

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



    })


}


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

function loadUser(user) {


    document.getElementById('name').value = user.name;
    document.getElementById('surname').value = user.surname;


}

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
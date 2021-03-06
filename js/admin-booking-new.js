// Code to start executing script when DOM ready
window.addEventListener('DOMContentLoaded', start);

function start() {

    // Check user permissions, if so load the rest of functions, if not, redirects to index
    if (isAdmin()) {

        document.getElementById('form').addEventListener('submit', submitForm);

        // Load data into the dropdown menus
        findAllProducts(loadProducts);
        findAllUsers(loadUsers);
        setDatePicker();

    } else {
        window.location.href = "./index.html";
    }

    // Controll the form submission
    function submitForm(e) {
        e.preventDefault();

        let booking = getFormInfo();
        addBooking(booking);
        window.location.href = "./admin-booking.html";
    }

    // Gets info inputed by the user in the form
    function getFormInfo() {

        let product = document.getElementById('product').value;
        let user = document.getElementById('client').value;
        let adults = document.getElementById('adults').value;
        let children = document.getElementById('children').value;
        let date = document.getElementById('date').value;
        let comments = document.getElementById('comments').value;
        let bookingDate = now();


        let booking = {
            'adults': adults,
            'children': children,
            'bookingDate': date,
            'date': date,
            'comments': comments,
            'user': {
                'id': user
            },
            'product': {
                'id': product
            }
        }

        return booking;

    }




}

// Get info from products and load them into HTML
function loadProducts(products) {

    let select = document.getElementById('product');
    for (let i = 0; i < products.length; i++) {

        let option = document.createElement('option');
        option.setAttribute('value', `${products[i].id}`)
        option.innerHTML = products[i].name;
        select.appendChild(option);
    }


}

// Get info from users and load them into HTML
function loadUsers(users) {

    let select = document.getElementById('client');
    for (let i = 0; i < users.length; i++) {

        let option = document.createElement('option');
        option.setAttribute('value', `${users[i].id}`)
        option.innerHTML = users[i].name;
        select.appendChild(option);
    }

}

// Sets todays date on the input type date
function setDatePicker() {

    let datePicker = document.getElementById('date');
    datePicker.value = now();
    datePicker.setAttribute('min', new Date().toDateInputValue())

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
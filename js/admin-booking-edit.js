window.addEventListener('DOMContentLoaded', start);

function start() {


    if (isAdmin()) {

        document.getElementById('form').addEventListener('submit', submitForm);

        // Load data into the dropdown menus
        findAllProducts(loadProducts);
        findAllUsers(loadUsers);
        loadInfo();

    } else {
        window.location.href = "./index.html";
    }

    // Controll the form submission
    function submitForm(e) {
        e.preventDefault();

        let booking = getFormInfo();
        let id = new URLSearchParams(window.location.search).get('id');
        editBooking(id, booking);
        window.location.href = "./admin-booking.html";
    }





    function getFormInfo() {

        let product = document.getElementById('product').value;
        let user = document.getElementById('client').value;
        let adults = document.getElementById('adults').value;
        let children = document.getElementById('children').value;
        let date = document.getElementById('date').value;
        let comments = document.getElementById('comments').value;


        let booking = {
            'adults': adults,
            'children': children,
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



    function loadInfo() {

        let id = new URLSearchParams(window.location.search).get('id');
        let booking = findBookingById(id, fillForm);

        function fillForm(booking) {

            let newDate = new Date(booking.date);
            newDate.setDate(newDate.getDate() + 1);

            document.getElementById('product').value = booking.product.id;
            document.getElementById('client').value = booking.user.id;
            document.getElementById('adults').value = booking.adults;
            document.getElementById('children').value = booking.children;
            document.getElementById('date').value = newDate.toISOString().split('T')[0];
            document.getElementById('comments').value = booking.comments;
        }


    }


}

function loadProducts(products) {

    let select = document.getElementById('product');
    for (let i = 0; i < products.length; i++) {

        let option = document.createElement('option');
        option.setAttribute('value', `${products[i].id}`)
        option.innerHTML = products[i].name;
        select.appendChild(option);
    }


}

function loadUsers(users) {

    let select = document.getElementById('client');
    for (let i = 0; i < users.length; i++) {

        let option = document.createElement('option');
        option.setAttribute('value', `${users[i].id}`)
        option.innerHTML = users[i].name;
        select.appendChild(option);
    }

}

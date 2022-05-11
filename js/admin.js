// Code to start executing script when DOM ready
window.addEventListener('DOMContentLoaded', start);

function start() {

    if (isAdmin()) {

        let user = document.cookie.split('&')[0];
        let userId = user.split('=')[1];

        findAllBookings(loadBookings);
        findAllMessages(loadMessages);
        analytics()

        findUserById(userId, adminInfo);


    } else {
        window.location.href = "./index.html";
    }


}

function loadBookings(bookings) {

    let ul = document.getElementById('last-bookings');
    let max = 0;
    bookings.length < 1 ? max = 1 : max = 3;
    bookings = bookings.reverse(); // To show first the most recent

    for (let i = 0; i < max; i++) {

        let template = getTemplate(i, bookings);
        let li = document.createElement('li');
        li.setAttribute('class', 'py-5');
        li.setAttribute('if', `booking-id-${bookings[i].id}`);
        li.innerHTML = template;
        ul.appendChild(li);


    }


}


function getTemplate(i, bookings) {

    const template = ` 
    <div class="relative focus-within:ring-2 focus-within:ring-cyan-500">
    <h3 class="text-sm font-semibold text-gray-800">
        <a href="./admin-booking-edit.html?id=${bookings[i].id}" class="hover:underline focus:outline-none">
            <!-- Extend touch target to entire panel -->
            <span class="absolute inset-0" aria-hidden="true"></span>
            Booking Id: <span id="b-id-${bookings[i].id}">${bookings[i].id}</span>
        </a>
    </h3>
    <p class="mt-1 text-sm text-gray-600 line-clamp-2">Nombre: <span id="name-${bookings[i].id}">${bookings[i].user.name}</span></p>
    <p class="mt-1 text-sm text-gray-600 line-clamp-2">Email: <span id="email-${bookings[i].id}">${bookings[i].user.email}</span></p>
    <p class="mt-1 text-sm text-gray-600 line-clamp-2">Personas: <span id="people-${bookings[i].id}">A: ${bookings[i].adults}, N: ${bookings[i].children}</span></p>
    <p class="mt-1 text-sm text-gray-600 line-clamp-2">Fecha: <span id="date-${bookings[i].id}">${bookings[i].date}</span></p>
    <p class="mt-1 text-sm text-gray-600 line-clamp-2">Producto: <span id="name-${bookings[i].id}">${bookings[i].product.name}</span></p>
</div>
`;

    return template

}


function loadMessages(messages) {

    let ul = document.getElementById('last-messages');
    let max = 0;
    messages.length < 1 ? max = 1 : max = 3;
    messages = messages.reverse(); // To show first the most recent

    for (let i = 0; i < max; i++) {

        let template = getMessageTemplate(i, messages);
        let li = document.createElement('li');
        li.setAttribute('class', 'py-5');
        li.setAttribute('if', `message-id-${messages[i].id}`);
        li.innerHTML = template;
        ul.appendChild(li);


    }


}


function getMessageTemplate(i, messages) {

    let template = ` <li class="py-4">
    <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
            <img class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="">
        </div>
        <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">${messages[i].user.name}</p>
            <p class="text-sm text-gray-500 truncate">Fecha: ${messages[i].date}</p>
        </div>
        <div>
            <a href="./admin-message-edit.html?id=${messages[i].id}"
                class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                View </a>
        </div>
    </div>
    </li>`;

    return template;

}


function analytics() {


    findAllBookings(bookingAnalytics);

    function bookingAnalytics(bookings) {

        let bookingsToday = 0;

        let currentDay = new Date();

        for (let i = 0; i < bookings.length; i++) {

            let bookingDate = new Date(bookings[i].date);
            if (currentDay.getDate() == bookingDate.getDate()) {
                bookingsToday++;
            }

        }

        document.getElementById('today').innerHTML = bookingsToday;
        document.getElementById('total-bookings').innerHTML = bookings.length;


    }

}

function adminInfo(user) {
    let name = document.getElementById('admin-name');
    name.innerHTML = user.name;
}

window.addEventListener('DOMContentLoaded', start);

function start() {

    findAllBookings(loadBookings);


}

function loadBookings(bookings) {

    let ul = document.getElementById('last-bookings');
    let max = 0;
    bookings.length < 1 ? max = 1 : max = bookings.length;

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
        <a href="/admin-booking-edit.html?id=${bookings[i].id}" class="hover:underline focus:outline-none">
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



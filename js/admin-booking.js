window.addEventListener('DOMContentLoaded', start);

function start() {

    if (isAdmin()) {

        findAllBookings(showAllBookings);

    } else {
        window.location.href = "./index.html";
    }

}

function showAllBookings(bookings) {

    console.log(bookings);

    let stackedList = document.getElementById('booking-list');
    stackedList.innerHTML = ``;



    for (let i = 0; i < bookings.length; i++) {

        let template = getTemplate(bookings, i);

        let li = document.createElement('li');
        li.innerHTML = template;
        li.setAttribute('id', `booking-${bookings[i].id}`);
        stackedList.appendChild(li);

        document.getElementById(`booking-id-${bookings[i].id}`).innerHTML = bookings[i].id;
        document.getElementById(`client-name-${bookings[i].id}`).innerHTML = bookings[i].user.name;
        document.getElementById(`tour-${bookings[i].id}`).innerHTML = bookings[i].product.name;
        document.getElementById(`email-${bookings[i].id}`).innerHTML = bookings[i].user.email;
        document.getElementById(`phone-${bookings[i].id}`).innerHTML = bookings[i].user.phone;
        document.getElementById(`visit-date-${bookings[i].id}`).innerHTML = bookings[i].date;
        document.getElementById(`booking-date-${bookings[i].id}`).innerHTML = bookings[i].bookingDate;
        document.getElementById(`adults-${bookings[i].id}`).innerHTML = bookings[i].adults;
        document.getElementById(`children-${bookings[i].id}`).innerHTML = bookings[i].children;
        document.getElementById(`edit-link-${bookings[i].id}`).setAttribute(`href`, `./admin-booking-edit.html?id=${bookings[i].id}`);
        document.getElementById(`delete-function-${bookings[i].id}`).setAttribute(`onclick`, `deleteBookingById(${bookings[i].id})`);





    }
}


function getTemplate(bookings, i) {


    const template = `

          <div class="block sm:flex items-center py-5 px-4 sm:py-6 sm:px-0">
              <div class="min-w-0 flex-1 flex items-center">
                  <div class="flex-shrink-0">
                      <img class="h-12 w-12 rounded-full group-hover:opacity-75"
                          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="">
                  </div>
                  <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-3 md:gap-4">
                      <div>
                          <p class="text-sm font-medium text-purple-600 truncate">
                              Booking ID: <span id="booking-id-${bookings[i].id}"> </span>

                          </p>
                          <p class="text-sm font-medium text-purple-600 truncate">
                              Client: <span id="client-name-${bookings[i].id}"></span>
                          </p>
                          <p class="text-sm font-medium text-purple-600 truncate">
                              Tour: <span id="tour-${bookings[i].id}"> </span>
                          </p>

                      </div>

                      <div>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                              <!-- Heroicon name: solid/mail -->
                              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                  fill="currentColor" aria-hidden="true">
                                  <path
                                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                              <span id="email-${bookings[i].id}" class="truncate mr-3"></span>



                          </p>

                          <p class="mt-2 flex items-center text-sm text-gray-500">


                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <span id="phone-${bookings[i].id}" class="truncate"></span>


                          </p>
                      </div>
                      <div class="block">
                          <div>
                              <p class="text-sm text-gray-900">
                                  Fecha de visita:
                                  <time id="visit-date-${bookings[i].id}" datetime="2020-07-01T15:34:56"></time>
                              </p>
                              <p class="text-sm text-gray-900">
                                  Fecha de reserva:
                                  <time id="booking-date-${bookings[i].id}" datetime="2020-07-01T15:34:56"></time>
                              </p>
                              <p class="mt-2 flex items-center text-sm text-gray-500">Adultos: 
                                  <span id="adults-${bookings[i].id}"></span>, Niños: <span id="children-${bookings[i].id}"></span>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="mt-5 flex xl:mt-0 xl:ml-4 items-center">
                  <a  id="edit-link-${bookings[i].id}">
                      <button type="button"
                          class="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500">Editar</button></a>
                      
                      <button id="delete-function-${bookings[i].id}"
                      type="button"
                      class="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
                      >Borrar</button>
              </div>
          </div>
          `;

    return template;

}
window.addEventListener(`DOMContentLoaded`, start);


function start() {


    //findAllProducts(productsToGallery);
    setDatePicker();
    filter();
    fillPeople(20)
    displayAvailableProducts();

    document.getElementById('people').addEventListener('change', displayAvailableProducts);

}


function productsToGallery(products) {

    let gallery = document.getElementById(`products`);
    gallery.innerHTML = ``;

    for (let i = 0; i < products.length; i++) {



        let link = document.createElement(`a`);
        link.setAttribute(`href`, `/product.html?id=${products[i].id}`);
        link.setAttribute(`class`, `group text-sm`);
        let container3 = document.createElement(`div`);
        container3.setAttribute(`class`, `w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75`);
        let img = document.createElement(`img`);
        img.setAttribute(`src`, `./img/Ayuso.jpg`);
        img.setAttribute(`class`, `w-full h-full object-center object-cover`);
        let title = document.createElement(`h3`);
        title.setAttribute(`class`, `mt-4 font-medium text-gray-900">Nomad Pouch`);
        title.innerHTML = `${products[i].name}`;
        let p1 = document.createElement(`p`);
        p1.setAttribute(`class`, `text-gray-500 italic`);
        p1.innerHTML = `${products[i].description}`;
        let p2 = document.createElement(`p`);
        p2.setAttribute(`class`, `mt-2 font-medium text-gray-900`);
        p2.innerHTML = `${products[i].price}`;

        gallery.appendChild(link);
        link.appendChild(container3);
        container3.appendChild(img);
        link.appendChild(title);
        link.appendChild(p1);
        link.appendChild(p2);
    }

}

function setDatePicker() {
    Date.prototype.toDateInputValue = (function () {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
    });
    let datePicker = document.getElementById('date-picker');

    datePicker.value = new Date().toDateInputValue();
    datePicker.setAttribute('min', new Date().toDateInputValue())


}

function filter() {

    document.getElementById('nextDay').addEventListener('click', nextDay);
    document.getElementById('prevDay').addEventListener('click', prevDay);
    let currentDay = new Date(document.getElementById('date-picker').value);

    function nextDay() {

        let datePicker = document.getElementById('date-picker');
        currentDay.setDate(currentDay.getDate() + 1);
        datePicker.value = currentDay.toDateInputValue();
        displayAvailableProducts()

    }

    function prevDay() {

        let datePicker = document.getElementById('date-picker');
        let today = new Date();

        if (currentDay >= today) {

            currentDay.setDate(currentDay.getDate() - 1);
            datePicker.value = currentDay.toDateInputValue();
            displayAvailableProducts()
        }
    }



}


function displayAvailableProducts() {

    // select * from product p join booking b on p.id = b.id_product where (b.adults + b.children) < p.capacity and date = '2022-04-11';

    let date = new Date(document.getElementById('date-picker').value)

    findBookingByDate(date.toDateInputValue(), getPeople)

    function getPeople(bookings) {

        if (bookings.length < 1) {
            findAllProducts(productsToGallery);
        } else {

            findAllProducts(filterProducts)

            function filterProducts(products) {

                let availableProducts = []

                for (let i = 0; i < products.length; i++) {
                    // Tengo el producto
                    let people = 0;
                    for (let j = 0; j < bookings.length; j++) {
                        // Tengo las reservas

                        if (products[i].id == bookings[j].product.id) {
                            // Si el id es igual, sumo personas 

                            people = people + parseInt(bookings[j].adults) + parseInt(bookings[j].children);
                            //console.log(`Para el tour ${products[i].id} hay un total de ${people} personas`);

                        }

                    }

                    let peopleRequested = document.getElementById('people').value;

                    if (products[i].capacity <= (people + parseInt(peopleRequested))) {
                        console.log(`Se marca completo el tour ${products[i].id} con ${people} ya en reserva y ${peopleRequested} personas solicitadas. Tiene y una capacidad de ${products[i].capacity}`);
                        
                        products[i].description = 'COMPLETO'
                    }
                    availableProducts.push(products[i])

                }

                productsToGallery(availableProducts)

            }
        }

    }
}

function fillPeople(limit){

    let select = document.getElementById('people');
    for (let i = 1; i <= limit; i++) {
        let option = document.createElement('option');
        option.setAttribute('value', i);
        option.innerHTML = i;
        select.appendChild(option);
    }


}
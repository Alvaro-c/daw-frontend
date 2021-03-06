// Code to start executing script when DOM ready
window.addEventListener(`DOMContentLoaded`, start);


function start() {


    //findAllProducts(productsToGallery);
    setDatePicker();
    filter();
    fillPeople(25)
    displayAvailableProducts();

    document.getElementById('people').addEventListener('change', displayAvailableProducts);

}

// Load all products into the gallery
function productsToGallery(products) {

    let gallery = document.getElementById(`products`);
    gallery.innerHTML = ``;

    for (let i = 0; i < products.length; i++) {

        products[i].price == 0 ? products[i].price = 'Libre' :  products[i].price == products[i].price;

        let link = document.createElement(`a`);
        link.setAttribute(`href`, `./product.html?id=${products[i].id}`);
        link.setAttribute(`class`, `group text-sm`);
        let container3 = document.createElement(`div`);
        container3.setAttribute(`class`, `w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75`);
        let img = document.createElement(`img`);
        img.setAttribute(`src`, `${products[i].image}`);
        img.setAttribute(`class`, `w-full h-full object-center object-cover`);
        let title = document.createElement(`h3`);
        title.setAttribute(`class`, `mt-4 font-medium text-gray-900">Nomad Pouch`);
        title.innerHTML = `${products[i].name}`;
        let p1 = document.createElement(`p`);
        p1.setAttribute(`class`, `text-gray-500 italic`);
        p1.innerHTML = `${products[i].description}`;
        let p2 = document.createElement(`p`);
        p2.setAttribute(`class`, `mt-2 font-medium text-gray-900`);

        if (products[i].price == 'Libre' || products[i].price == 'No disponible'){
            p2.innerHTML = `Precio: ${products[i].price}`;
        } else {
            p2.innerHTML = `Precio: ${products[i].price} €/persona`;
        }

        

        gallery.appendChild(link);
        link.appendChild(container3);
        container3.appendChild(img);
        link.appendChild(title);
        link.appendChild(p1);
        link.appendChild(p2);
    }

}

// Sets todays date on the input type date
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

// Function to filter by people and date. Products will display accordingly 
function filter() {

    document.getElementById('nextDay').addEventListener('click', nextDay);
    document.getElementById('prevDay').addEventListener('click', prevDay);
    let currentDay = new Date(document.getElementById('date-picker').value);

    // Function to advance to next day on input type date field
    function nextDay() {

        let datePicker = document.getElementById('date-picker');
        currentDay.setDate(currentDay.getDate() + 1);
        datePicker.value = currentDay.toDateInputValue();
        displayAvailableProducts()

    }

    // Function to go back one day on input type date field
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


// Show available products after filters change
function displayAvailableProducts() {

    // select * from product p join booking b on p.id = b.id_product where (b.adults + b.children) < p.capacity and date = '2022-04-11';

    let date = new Date(document.getElementById('date-picker').value)

    findBookingByDate(date.toDateInputValue(), getPeople)

    function getPeople(bookings) {

        if (bookings.length < 1) {
            findAllProducts(filterByPeople);


            function filterByPeople(products){

                let availableProducts = [];
                let peopleRequested = document.getElementById('people').value;
                for (let i = 0; i < products.length; i++) {

                    if(peopleRequested >= products[i].capacity) {
                        products[i].description = 'COMPLETO';
                        products[i].price = 'No disponible'
                        
                        
                    }
                    availableProducts.push(products[i])
                }

                productsToGallery(availableProducts);
            }


        } else {

            findAllProducts(filterProducts)

            function filterProducts(products) {

                let availableProducts = [];

                for (let i = 0; i < products.length; i++) {
                    // Tengo el producto
                    let people = 0;
                    for (let j = 0; j < bookings.length; j++) {
                        // Tengo las reservas

                        if (products[i].id == bookings[j].product.id) {
                            // Si el id es igual, sumo personas 

                            people = people + parseInt(bookings[j].adults) + parseInt(bookings[j].children);

                        }

                    }

                    let peopleRequested = document.getElementById('people').value;

                    if (products[i].capacity <= (people + parseInt(peopleRequested))) {
                        
                        products[i].description = 'COMPLETO';
                        products[i].price = 'No disponible';
                    }
                    availableProducts.push(products[i])

                }

                productsToGallery(availableProducts)

            }
        }

    }
}

// Function to fill HTML select tag with options
function fillPeople(limit){

    let select = document.getElementById('people');
    for (let i = 1; i <= limit; i++) {
        let option = document.createElement('option');
        option.setAttribute('value', i);
        option.innerHTML = i;
        select.appendChild(option);
    }


}
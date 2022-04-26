window.addEventListener('DOMContentLoaded', start);

function start() {
    productRevAndFaq();
    loadProduct();
    setCancelButton();
    document.getElementById('confirm-booking').addEventListener('click', confirmBooking);
    showAvail()
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
        
        let image = document.getElementById('product-image');
        //TODO set image
        document.getElementById('product-name').innerHTML = product.name;


    })


}

function setCancelButton(){

    let id = new URLSearchParams(window.location.search).get('id'); 
    let cancelButton = document.getElementById('cancel-booking');
    cancelButton.setAttribute('href', `/product.html?id=${id}`);

}

function confirmBooking(e) {

    e.preventDefault();
    
    let id = new URLSearchParams(window.location.search).get('id');

    let adults = document.getElementById('adults').value;
    let children = document.getElementById('children').value;
    let date = document.getElementById('date').value;
    let comments = document.getElementById('comments').value;
    let user = 6;
    

    let booking = {
        'adults': adults,
        'children': children,
        'bookingDate': now(),
        'date': date,
        'comments': comments,
        'user': {
            'id': 6
        },
        'product': {
            'id': id
        }
    }


    let avail = document.getElementById('current-avail').innerHTML;
    console.log(parseInt(avail) > parseInt(adults+children));

    if (parseInt(avail) > parseInt(adults+children)) {
        newBooking(booking);
    }

}

function now(){
    Date.prototype.toDateInputValue = (function () {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
    });

    return new Date().toDateInputValue();
}

function showAvail(){
    let id = new URLSearchParams(window.location.search).get('id');
    let date = document.getElementById('date');
    let avail;

    date.addEventListener('change', ()=> {

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

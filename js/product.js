window.addEventListener('DOMContentLoaded', start);

function start() {
    productRevAndFaq();
    loadProduct()

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

    let id = new URLSearchParams(window.location.search).get('id')
    findProductById(id, (product) => {
        
        document.getElementById('product-image').setAttribute('src', product.image);
        document.getElementById('product-name').innerHTML = product.name;
        document.getElementById('product-description').innerHTML = product.description;
        console.log(product.price);
        if(product.price != 0) {
            document.getElementById('product-price').innerHTML = `${product.price}€`;
        } else {
            document.getElementById('product-price').innerHTML = 'Libre';
        }
        let link = document.getElementById('booking-link');
        link.setAttribute('href', `./booking-form.html?id=${id}`);


    })


}
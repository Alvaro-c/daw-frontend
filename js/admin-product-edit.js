// Code to start executing script when DOM ready
window.addEventListener('DOMContentLoaded', start);
let image;

function start() {

    if (isAdmin()) {

        loadInfo();

        document.getElementById('form').addEventListener('submit', submitForm);

        let photo = document.getElementById('image');

        photo.addEventListener('change', () => {

            encodeImageFileAsURL(photo)

        });

    } else {
        window.location.href = "./index.html";
    }

 

    function submitForm(e) {
        e.preventDefault();

        let id = new URLSearchParams(window.location.search).get('id');
        let product = getFormInfo();

        editProduct(id, product);

        window.location.href = "./admin-product.html";
    }

    function getFormInfo() {


        let name = document.getElementById('name').value;
        let description = document.getElementById('description').value;
        let price = document.getElementById('price').value;
        let capacity = document.getElementById('capacity').value;

        let product = {
            'name': name,
            'description': description,
            'price': price,
            'capacity': capacity,
            'image': image
        }
        return product;

    }

    function loadInfo() {

        let id = new URLSearchParams(window.location.search).get('id');
        let product = findProductById(id, fillForm);


        function fillForm(product) {
            document.getElementById('name').value = product.name;
            document.getElementById('description').value = product.description;
            document.getElementById('price').value = product.price;
            document.getElementById('capacity').value = product.capacity;
            image = product.image;
        }


    }


}


function encodeImageFileAsURL(element) {

    let file = element.files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
        image = reader.result
    }

    reader.readAsDataURL(file);
}
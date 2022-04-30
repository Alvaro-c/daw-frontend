window.addEventListener('DOMContentLoaded', start);

function start() {

    if (isAdmin()) {

        document.getElementById('form').addEventListener('submit', submitForm);

    } else {
        window.location.href = "./index.html";
    }


    function submitForm(e) {
        e.preventDefault();

        let product = getFormInfo();
        addProduct(product);
        window.location.href = "./admin-product.html";
    }

    function getFormInfo() {

        let name = document.getElementById('name').value;
        let description = document.getElementById('description').value;
        let price = document.getElementById('price').value;
        let capacity = document.getElementById('capacity').value;
        // let image = document.getElementById('image').files[0];

        let product = {
            'name': name,
            'description': description,
            'price': price,
            'capacity': capacity,
        }

        return product;

    }


}
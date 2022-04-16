window.addEventListener(`DOMContentLoaded`, start);


function start() {
    let products = findAllProducts(productsToGallery);
    setDatePicker();

}


function productsToGallery(products) {
    console.log(products);

    for (let i = 0; i < products.length; i++) {

        let gallery = document.getElementById(`products`);

        let link = document.createElement(`a`);
        link.setAttribute(`href`, `/test.html?${products[i].id}`);
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
        p1.innerHTML = `${products[i].capacity}`;
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

function setDatePicker(){
    Date.prototype.toDateInputValue = (function () {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
    });
    let datePicker = document.getElementById('date-picker');

    datePicker.value = new Date().toDateInputValue();
    datePicker.setAttribute('min', new Date().toDateInputValue())

}
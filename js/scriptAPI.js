
//document.addEventListener('DOMContentLoaded', start);

function start() {

    const results = fetch('http://127.0.0.1:4000/api/client')
        .then((promise) => {
            return promise.json();
        }).then((values) => {
            console.log(values);
        })

}

// CRUD functions for USER

function findAllUsers() {
    const request = fetch('http://127.0.0.1:4000/api/user')
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            console.log(result);
        })
}

function findUserById(id) {
    const request = fetch(`http://127.0.0.1:4000/api/user/${id}`)
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            console.log(result);
        })
}


function addUser() {
    const request = fetch(`http://127.0.0.1:4000/api/user`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: "Peter",
            surname: "Silva",
            phone: "606830316",
            email: "test@test.com", 
            rol: "1"
        })
    })
        .then(resp => resp.json())
        .then(resp => console.log(resp))

}

function editUser(id) {
    fetch(`http://127.0.0.1:4000/api/user/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: 'Anderson',
            surname: "Silva",
            phone: "606830316",
            email: "test@test.com", 
            rol: "1"
        })
    })
        .then(resp => console.log(resp))
}


function deleteUserById(id) {

    const request = fetch(`http://localhost:4000/api/user/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(resp => console.log(resp))
}


// CRUD functions for MESSAGE

function findAllMessages() {
    const request = fetch('http://127.0.0.1:4000/api/message')
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            console.log(result);
        })
}

function findMessageById(id) {
    const request = fetch(`http://127.0.0.1:4000/api/message/${id}`)
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            console.log(result);
        })
}

function findMessageByUserId(id) {
    const request = fetch(`http://127.0.0.1:4000/api/message/user_id/${id}`)
    .then((promise) => {
        return promise.json();
    })
    .then((result) => {
        console.log(result);
    })
}

function addMessage() {
    const request = fetch(`http://127.0.0.1:4000/api/message`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            body: "Loler",
            date: "2022-04-11",
            user: {
                id: "6"
            }
        })
    })
        .then(resp => resp.json())
        .then(resp => console.log(resp))

}

function editMessage(id) {
    fetch(`http://127.0.0.1:4000/api/message/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            body: 'Anderson',
            date: "2022-04-11",
            user: {
                id:"6"
            }
        })
    })
        .then(resp => console.log(resp))
}

function deleteMessageById(id) {

    const request = fetch(`http://localhost:4000/api/message/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(resp => console.log(resp))
    
}


// CRUD functions for Products

function findAllProducts() {
    const request = fetch('http://127.0.0.1:4000/api/product')
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            console.log(result);
        })
}

function findProductById(id) {
    const request = fetch(`http://127.0.0.1:4000/api/product/${id}`)
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            console.log(result);
        })
}


function addProduct() {
    const request = fetch(`http://127.0.0.1:4000/api/product`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: "Loler",
            price: "0",
            capacity: "20"
        })
    })
        .then(resp => resp.json())
        .then(resp => console.log(resp))

}

function editProduct(id) {
    fetch(`http://127.0.0.1:4000/api/product/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: 'Anderson',
            price: "5",
            capacity: "21"
        })
    })
        .then(resp => console.log(resp))
}

function deleteProductById(id) {

    const request = fetch(`http://localhost:4000/api/product/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(resp => console.log(resp))
    
}


// CRUD functions for Booking

function findAllBookings() {
    const request = fetch('http://127.0.0.1:4000/api/booking')
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            console.log(result);
        })
}

function findBookingById(id) {
    const request = fetch(`http://127.0.0.1:4000/api/booking/${id}`)
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            console.log(result);
        })
}


function addBooking() {
    const request = fetch(`http://127.0.0.1:4000/api/booking`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            adults: "1",
            children: "0",
            comments: "Soy un adulto",
            user: {
                id: "6"
            }
        })
    })
        .then(resp => resp.json())
        .then(resp => console.log(resp))

}

function editBooking(id) {
    fetch(`http://127.0.0.1:4000/api/booking/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            adults: "10",
            children: "0",
            comments: "Somos mazo adultos",
            user: {
                id: "6"
            }
        })
    })
        .then(resp => console.log(resp))
}

function deleteBookingById(id) {

    const request = fetch(`http://localhost:4000/api/booking/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(resp => console.log(resp))
    
}
// This script handles every request to backend
// Name of each function defines what it does


// CRUD functions for USER

function findAllUsers(callBack) {
    const request = fetch('http://127.0.0.1:4000/api/user')
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            callBack(result);
            return result;
        })
}

function findUserById(id, callBack) {
    const request = fetch(`http://127.0.0.1:4000/api/user/${id}`)
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            callBack(result);
            return result;
        })
}


function addUser(user) {
    const request = fetch(`http://127.0.0.1:4000/api/user`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then(resp => resp.json())
        .then((result) => {
            return result;
        })
}

function editUser(id, user) {
    fetch(`http://127.0.0.1:4000/api/user/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then((result) => {
            return result;
        })
}


function deleteUserById(id) {

    const request = fetch(`http://localhost:4000/api/user/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then((result) => {
            findAllUsers(showAllUsers);
            return result;
        })
}


// CRUD functions for MESSAGE

function findAllMessages(callBack) {
    const request = fetch('http://127.0.0.1:4000/api/message')
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            callBack(result);
            return result;
        })
}

function findMessageById(id, callBack) {
    const request = fetch(`http://127.0.0.1:4000/api/message/${id}`)
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            callBack(result);
            return result;
        })

}

function findMessageByUserId(id, callBack) {
    const request = fetch(`http://127.0.0.1:4000/api/message/user_id/${id}`)
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            callBack(result);
            return result;
        })
}

function addMessage(message) {
    const request = fetch(`http://127.0.0.1:4000/api/message`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)
    })
        .then(resp => resp.json())
        .then((result) => {
            return result;
        })

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
                id: "6"
            }
        })
    })
        .then((result) => {
            return result;
        })
}

function deleteMessageById(id) {

    const request = fetch(`http://localhost:4000/api/message/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then((result) => {
            findAllMessages(showAllMessages);
            return result;
        })

}



// CRUD functions for PRODUCT

function findAllProducts(callBack) {
    const request = fetch('http://127.0.0.1:4000/api/product')
        .then((promise) => {
            return promise.json();
        }).then((result) => {
            callBack(result);
            return result;
        })
}

function findProductById(id, callBack) {
    const request = fetch(`http://127.0.0.1:4000/api/product/${id}`)
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            callBack(result);
        })
}

function findProductByDate(date, callBack) {

    const request = fetch(`http://127.0.0.1:4000/api/product/date/${date}`)
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            callBack(result);
        })

}


function addProduct(product) {

    let pjson = JSON.stringify(product)
    const request = fetch(`http://127.0.0.1:4000/api/product`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //"Accept": "application/json",
        },
        body: JSON.stringify(product)


    })
        .then((resp) => {

            return resp.json()
        })
        .then((result) => {
            return result;
        })

}

function editProduct(id, product) {

    fetch(`http://127.0.0.1:4000/api/product/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
    })
        .then((result) => {
            return result;
        })
}

function deleteProductById(id) {

    const request = fetch(`http://localhost:4000/api/product/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then((result) => {
            findAllProducts(showAllProducts);
            return result;
        }
        )

}


// CRUD functions for BOOKING

function findAllBookings(callBack) {
    const request = fetch('http://127.0.0.1:4000/api/booking')
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            callBack(result);
            return result;
        })
}

function findBookingById(id, callBack) {
    const request = fetch(`http://127.0.0.1:4000/api/booking/${id}`)
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            callBack(result);
            return result;
        })
}

function findBookingByUser(id, callBack) {
    const request = fetch(`http://127.0.0.1:4000/api/booking/user/${id}`)
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            callBack(result);
            return result;
        })
}

function findBookingByProduct(id) {
    const request = fetch(`http://127.0.0.1:4000/api/booking/product/${id}`)
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {

            return result;
        })
}

function findBookingByDate(date, callBack) {
    const request = fetch(`http://127.0.0.1:4000/api/booking/date/${date}`)
        .then((promise) => {
            return promise.json();
        })
        .then((result) => {
            callBack(result);
            return result;
        })
}

function addBooking(booking) {
    const request = fetch(`http://127.0.0.1:4000/api/booking`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking)
    })
        .then(resp => resp.json())
        .then((result) => {
            return result;
        })

}

function editBooking(id, booking) {
    fetch(`http://127.0.0.1:4000/api/booking/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking)
    })
        .then((result) => {
            return result;
        })
}

function deleteBookingById(id) {

    const request = fetch(`http://localhost:4000/api/booking/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then((result) => {
            findAllBookings(showAllBookings);
            return result;
        })

}


// Making a booking

function getAvailability(booking, callBack) {

    const request = fetch(`http://127.0.0.1:4000/api/availability`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking)
    })
        .then(resp => resp.json())
        .then((result) => {
            callBack(result);
            return result;
        })

}

function newBooking(booking) {

    const request = fetch(`http://127.0.0.1:4000/api/booking`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking)
    })
        .then(resp => resp.json())
        .then((result) => {
            return result;
        })
}




// Login controll

function login(user, callBack) {
    const request = fetch(`http://127.0.0.1:4000/api/login/access`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then((resp) => {

            return resp.json()
        })
        .then((result) => {

            callBack(result);
            return result;
        })

}

function checkUserSession() {
    const request = fetch(`http://127.0.0.1:4000/api/login/test`)
        .then(resp => resp.json())
        .then((result) => {

            return result;
        })
    
}

function newBookingFromUser(booking) {

    const request = fetch(`http://127.0.0.1:4000/api/booking`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking)
    })
        .then(resp => resp.json())
        .then((result) => {
            return result;
            
        }).then((result) => {

            if (!isNaN(result.id)) {
                thankYou()
                return result;
              }
              return Promise.reject(response); // catching the error
        }).catch(() => {
            bookingError()
        })


}


function addUserAndBooking(user, booking) {

    const request = fetch(`http://127.0.0.1:4000/api/user`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then(resp => resp.json())
        .then((result) => {

            booking = {

                'adults': booking.adults,
                'children': booking.children,
                'bookingDate': booking.date,
                'date': booking.date,
                'comments': booking.comments,
                'user': {
                    'id': result.id,
                },
                'product': {
                    'id': booking.product.id
                }

            }
            
            addBooking(booking)
            return result;

        }).then((result) => {

            if (!isNaN(result.id)) {
                thankYou()
                return result;
              }
              return Promise.reject(response); // catching the error


        }).catch(() => {

            bookingError()
        })
}


// function to send the contact form to the email

function newContactForm(form, callBack) {

    const request = fetch(`http://127.0.0.1:4000/api/contact-form`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
    })
        .then(form => form.json())
        .then((form) => {
            callBack(form);
            return form;
        })
}


// Convert images

function base64ToImage(base64) {

    let image = new Image();
    image.src = base64;
    let element = document.createElement('img');
    element.appendChild(image);

    return element
}


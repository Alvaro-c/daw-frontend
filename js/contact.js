// Code to start executing script when DOM ready
window.addEventListener('DOMContentLoaded', start);

function start() {

    // Event listener and function to send the email from contact page
    document.getElementById('submit').addEventListener('click', (e) => {

        e.preventDefault();

        let name = document.getElementById('first-name').value;
        let surname = document.getElementById('last-name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let message = document.getElementById('message').value;

        let contactForm = {

            'name': name, 
            'surname': surname, 
            'email': email, 
            'phone': phone, 
            'message': message
        }

        newContactForm(contactForm, thankYou);

        

    })

    // If the message has been sent successfully, this function is called to show a thank you message
    function thankYou(){

        
        let template = `
        <div class="mt-4">
        <h1 id="product-name"
            class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Hemos recibido tu mensaje, muchas gracias por contactar con nosotros.
        </h1>
        </div>
        `;

        document.getElementById('contact-form').innerHTML = template;


    }

}
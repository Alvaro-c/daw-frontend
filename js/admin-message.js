window.addEventListener('DOMContentLoaded', start);

function start() {

    if (isAdmin()) {

        findAllMessages(showAllMessages);

    } else {
        window.location.href = "./index.html";
    }

}

function showAllMessages(messages) {

    console.log(messages);

    let stackedList = document.getElementById('message-list');
    stackedList.innerHTML = ``;



    for (let i = 0; i < messages.length; i++) {

        let template = getTemplate(messages, i);

        let li = document.createElement('li');
        li.innerHTML = template;
        li.setAttribute('id', `booking-${messages[i].id}`);
        stackedList.appendChild(li);

        document.getElementById(`user-id-${messages[i].id}`).innerHTML = messages[i].user.id;
        document.getElementById(`user-name-${messages[i].id}`).innerHTML = messages[i].user.name;
        document.getElementById(`message-date-${messages[i].id}`).innerHTML = messages[i].date;
        document.getElementById(`select-link-${messages[i].id}`).setAttribute(`href`, `./admin-message-edit.html?id=${messages[i].id}`);
        document.getElementById(`delete-function-${messages[i].id}`).setAttribute(`onclick`, `deleteMessageById(${messages[i].id})`);


    }
}


function getTemplate(messages, i) {


    const template = `
  
    <div class="block sm:flex items-center py-5 px-4 sm:py-6 sm:px-0">
    <div class="min-w-0 flex-1 flex items-center">
        <div class="flex-shrink-0">
            <img class="h-12 w-12 rounded-full group-hover:opacity-75"
                src="${messages[i].user.photo}"
                alt="">
        </div>
        <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-3 md:gap-4">
            <div>
            
                <p class="text-sm font-medium text-purple-600 truncate">
                    Client: <span id="user-name-${messages[i].id}"></span>
                </p>
                <p class="text-sm font-medium text-purple-600 truncate">
                Client: <span id="user-id-${messages[i].id}"></span>
                </p>
            </div>

            <div class="block">
                <div>
                    <p class="text-sm text-gray-900">
                        Fecha del mensaje:
                        <time id="message-date-${messages[i].id}" datetime="2020-07-01T15:34:56"></time>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-5 flex xl:mt-0 xl:ml-4 items-center">
        <a  id="select-link-${messages[i].id}">
            <button type="button"
                class="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500">Ver</button></a>
            
            <button id="delete-function-${messages[i].id}"
            type="button"
            class="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
            >Borrar</button>
    </div>
</div>
            `;

    return template;

}

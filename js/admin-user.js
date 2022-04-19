window.addEventListener('DOMContentLoaded', start);

function start() {

  findAllUsers(showAllUsers);

}

function showAllUsers(users) {

  let stackedList = document.getElementById('users-list');
  stackedList.innerHTML = ``;

  for (let i = 0; i < users.length; i++) {

    let li = document.createElement('li');
    li.setAttribute('class', 'flex flex-wrap justify-center sm:justify-between');
    li.setAttribute('id', `${users[i].id}`);
    stackedList.appendChild(li);

    let div1 = document.createElement('div');
    div1.setAttribute('class', 'flex py-5 px-3');
    li.appendChild(div1);

    let img = document.createElement('img');
    img.setAttribute('class', 'h-12 w-12 rounded-full group-hover:opacity-75');
    img.setAttribute('src', '../img/Ayuso.jpg');
    div1.appendChild(img);
    let p1 = document.createElement('p');
    p1.setAttribute('class', 'flex items-center ml-3 text-sm font-medium text-gray-700 truncate');
    p1.innerHTML = `${users[i].name}`;
    div1.appendChild(p1);

    let div2 = document.createElement('div');
    div2.setAttribute('class', 'mt-5 flex xl:mt-0 xl:ml-4 items-center');
    li.appendChild(div2);

    let link = document.createElement('a');
    link.setAttribute('href', `/admin-user-edit.html?id=${users[i].id}`)
    div2.appendChild(link);

    let button1 = document.createElement('button');
    button1.setAttribute('type', 'button');
    button1.setAttribute('class', 'ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500');
    button1.innerHTML = 'Editar';
    link.appendChild(button1);

    let button2 = document.createElement('button');
    button2.setAttribute('type', 'button');
    button2.setAttribute('class', 'ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500');
    button2.setAttribute('onclick', `deleteUserById(${users[i].id})`);
    button2.innerHTML = 'Borrar';
    div2.appendChild(button2);

  }
}
window.addEventListener('DOMContentLoaded', menus);


//This function makes the nav bar menus collapsable
function menus() {

  try {

    document.getElementById('navbar').innerHTML = header;

  } catch {

  }
  try {
    document.getElementById('navbarAdmin').innerHTML = headerAdmin;
  } catch {

  }
  try {
    document.getElementById('footer').innerHTML = footer;
  } catch {

  }






  let links = document.getElementById('mobile-menu'); // Lo que oculto
  document.addEventListener('click', toggleLinks); // Lo que hago

  // Menu with mobile screen
  function toggleLinks() {

    let hamburger = document.getElementById('hamburger');
    if (!(hamburger.offsetParent === null)) {
      links.classList.toggle('hidden');
    }

  }

  // Menu with whide screen
  document.getElementById('user-menu-button')
    .addEventListener('click', () => {
      let menu = document.querySelector('[role=menu]');
      menu.classList.toggle('hidden');
    });

  // Show user options
  if (isLoged()) {

    if (document.cookie.split('=')[1] != undefined) {

      let user = document.cookie.split('&')[0];
      let userId = user.split('=')[1];


      let menuOptions = `
    <a href="./profile.html?id=${userId}" class="block px-4 py-2 text-sm text-black" role="menuitem" tabindex="-1"
      id="user-menu-item-1">Perfil</a>
    <a href="#" class="block px-4 py-2 text-sm text-black" role="menuitem" tabindex="-1"
      id="user-menu-item-3">Cerrar Sesión</a>`;

      let menu = document.getElementById('userMenu');
      menu.innerHTML = menuOptions;

    }

  }


  // Show admin options in menu
  if (isAdmin()) {

    let menuOptions = `
    <a href="./login.html" class="block px-4 py-2 text-sm text-black" role="menuitem" tabindex="-1"
      id="user-menu-item-0"></a>
    <a href="#" class="block px-4 py-2 text-sm text-black" role="menuitem" tabindex="-1"
      id="user-menu-item-3">Cerrar Sesión</a>`;


    let menu = document.getElementById('userMenu');
    menu.innerHTML = menuOptions;

    let adminOption = document.getElementById('user-menu-item-0');
    adminOption.innerHTML = 'Administración';
    adminOption.setAttribute('href', './admin.html');

  }
  try {

    document.getElementById('user-menu-item-3').addEventListener('click', deleteCookie)
  } catch {

  }

}

const header = `    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex justify-between h-16">
  <div class="flex">

    <a href="./index.html" class="flex-shrink-0 flex items-center">
      <!-- Logo -->

        <img class="block h-12 w-auto" src="./img/umbrella-transparent-148x121.png"
          alt="FreeTourSegovia">
        <span class="mx-3 text-white text-lg font-bold">FreeTourSegovia</span>
      
    </a>

    <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
      <!-- Current: Default: "border-transparent text-white hover:border-sky-500 hover:text-white" -->
      <a id="home" href="./index.html"
        class="border-transparent hover:border-sky-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
        Home </a>
      <a id="tours" href="./products.html"
        class="border-transparent text-white hover:border-sky-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
        Tours </a>
      <a id="comer" href="./index.html"
        class="border-transparent text-white hover:border-sky-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
        Dónde comer en Segovia </a>
    </div>
  </div>
  <div class="hidden sm:ml-6 sm:flex sm:items-center">
    <button type="button"
      class="bg-amber-500 p-1 rounded-full text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
      <span class="sr-only">View notifications</span>
      <!-- Heroicon name: outline/bell -->
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    </button>

    <!-- Profile dropdown -->
    <div class="ml-3 relative">
      <div>
        <button type="button"
          class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          id="user-menu-button" aria-expanded="false" aria-haspopup="true">
          <span class="sr-only">Open user menu</span>
          <img class="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="">
        </button>
      </div>

      <!--
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-200"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      -->
      <div id="userMenu"
        class="z-10 hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
        <!-- Active: "bg-gray-100", Not Active: "" -->
        <a href="./login.html" class="block px-4 py-2 text-sm text-black" role="menuitem" tabindex="-1"
          id="user-menu-item-0">Login</a>
      </div>
    </div>
  </div>
  <div id="hamburger" class="-mr-2 flex items-center sm:hidden">
    <!-- Mobile menu button -->
    <button type="button"
      class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
      aria-controls="mobile-menu" aria-expanded="false" id="mobile-menu-button">
      <span class="sr-only">Open main menu</span>
      <!--
        Icon when menu is closed.

        Heroicon name: outline/menu

        Menu open: "hidden", Menu closed: "block"
      -->
      <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <!--
        Icon when menu is open.

        Heroicon name: outline/x

        Menu open: "block", Menu closed: "hidden"
      -->
      <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>
</div>

<!-- Mobile menu, show/hide based on menu state. -->
<div class="hidden bg-white" id="mobile-menu">
<div class="pt-2 pb-3 space-y-1">
  <!-- Current: "bg-indigo-50 border-sky-500 text-indigo-700", Default: "border-transparent text-white hover:bg-gray-50 hover:border-sky-500 hover:text-white" -->
  <a href="#"
    class="bg-indigo-50 border-sky-500 text-sky-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</a>
  <a href="#"
    class="border-transparent text-sky-800 hover:bg-gray-50 hover:border-sky-500  block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Tours</a>
  <a href="#"
    class="border-transparent text-sky-800 hover:bg-gray-50 hover:border-sky-500  block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Dónde
    comer en Segovia</a>
</div>
<div class="pt-4 pb-3 border-t border-gray-200">
  <div class="flex items-center px-4">
    <div class="flex-shrink-0">
      <img class="h-10 w-10 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="">
    </div>
    <div class="ml-3">
      <div class="text-base font-medium text-gray-800">Tom Cook</div>
      <div class="text-sm font-medium text-sky-800">tom@example.com</div>
    </div>
    <button type="button"
      class="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
      <span class="sr-only">View notifications</span>
      <!-- Heroicon name: outline/bell -->
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    </button>
  </div>
  <div class="mt-3 space-y-1">
    <a href="#"
      class="block px-4 py-2 text-base font-medium text-sky-800 hover:text-gray-800 hover:bg-gray-100">Your
      Profile</a>
    <a href="#"
      class="block px-4 py-2 text-base font-medium text-sky-800 hover:text-gray-800 hover:bg-gray-100">Settings</a>
    <a href="#"
      class="block px-4 py-2 text-base font-medium text-sky-800 hover:text-gray-800 hover:bg-gray-100">Sign
      out</a>
  </div>
</div>
</div>`

const headerAdmin = `<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex justify-between h-16">
    <div class="flex">
        <a href="./index.html" class="flex-shrink-0 flex items-center">
            <!-- Logo -->

              <img class="block h-12 w-auto" src="./img/umbrella-transparent-148x121.png"
                alt="FreeTourSegovia">
              <span class="mx-3 text-white text-lg font-bold">FreeTourSegovia</span>
            
          </a>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: Default: "border-transparent text-white hover:border-sky-500 hover:text-white" -->
            <a href="./admin.html"
                class="hover:border-sky-500 border-amber-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Panel de administración </a>
        </div>
    </div>
    <div class="hidden sm:ml-6 sm:flex sm:items-center">
        <button type="button"
            class="bg-amber-500 p-1 rounded-full text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
        </button>

        <!-- Profile dropdown -->
        <div class="ml-3 relative">
            <div>
                <button type="button"
                    class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="">
                </button>
            </div>

            <!--
  Dropdown menu, show/hide based on menu state.

  Entering: "transition ease-out duration-200"
    From: "transform opacity-0 scale-95"
    To: "transform opacity-100 scale-100"
  Leaving: "transition ease-in duration-75"
    From: "transform opacity-100 scale-100"
    To: "transform opacity-0 scale-95"
-->
            <div id="userMenu" class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                <!-- Active: "bg-gray-100", Not Active: "" -->

            </div>
        </div>
    </div>
    <div id="hamburger" class="-mr-2 flex items-center sm:hidden">
        <!-- Mobile menu button -->
        <button type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
            aria-controls="mobile-menu" aria-expanded="false" id="mobile-menu-button">
            <span class="sr-only">Open main menu</span>
            <!--
  Icon when menu is closed.

  Heroicon name: outline/menu

  Menu open: "hidden", Menu closed: "block"
-->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
  Icon when menu is open.

  Heroicon name: outline/x

  Menu open: "block", Menu closed: "hidden"
-->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
</div>
</div>

<!-- Mobile menu, show/hide based on menu state. -->
<div class="hidden bg-white" id="mobile-menu">
<div class="pt-2 pb-3 space-y-1">
    <!-- Current: "bg-indigo-50 border-sky-500 text-indigo-700", Default: "border-transparent text-white hover:bg-gray-50 hover:border-sky-500 hover:text-white" -->
    <a href="./admin.html" class=" text-sky-800 block pl-3 pr-4 py-2  text-base font-medium">Panel
        de administración</a>
</div>
<div class="pt-4 pb-3 border-t border-gray-200">
    <div class="flex items-center px-4">
        <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="">
        </div>
        <div class="ml-3">
            <div class="text-base font-medium text-gray-800">Tom Cook</div>
            <div class="text-sm font-medium text-sky-800">tom@example.com</div>
        </div>
        <button type="button"
            class="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
        </button>
    </div>
    <div class="mt-3 space-y-1">
        <a href="#"
            class="block px-4 py-2 text-base font-medium text-sky-800 hover:text-gray-800 hover:bg-gray-100">Your
            Profile</a>
        <a href="#"
            class="block px-4 py-2 text-base font-medium text-sky-800 hover:text-gray-800 hover:bg-gray-100">Settings</a>
        <a href="#"
            class="block px-4 py-2 text-base font-medium text-sky-800 hover:text-gray-800 hover:bg-gray-100">Sign
            out</a>
    </div>
</div>
</div>`

const footer = `    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
<nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
  <div class="px-5 py-2">
    <a href="./products.html" class="text-base text-white hover:text-white"> Tours </a>
  </div>

  <div class="px-5 py-2">
    <a href="#" class="text-base text-white hover:text-white"> Blog </a>
  </div>

  <div class="px-5 py-2">
    <a href="#" class="text-base text-white hover:text-white"> Perfil </a>
  </div>

  <div class="px-5 py-2">
    <a href="#" class="text-base text-white hover:text-white"> Privacidad </a>
  </div>

</nav>
<div class="mt-8 flex justify-center space-x-6">
  <a href="#" class="text-white hover:text-white">
    <span class="sr-only">Facebook</span>
    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clip-rule="evenodd" />
    </svg>
  </a>

  <a href="#" class="text-white hover:text-white">
    <span class="sr-only">Instagram</span>
    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clip-rule="evenodd" />
    </svg>
  </a>


  <a href="#" class="text-white hover:text-white">
    <span class="sr-only">GitHub</span>
    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clip-rule="evenodd" />
    </svg>
  </a>

</div>
<p class="mt-8 text-center text-base text-white">&copy; 2022 Alvaro Cañas. All rights reserved.</p>
</div>`
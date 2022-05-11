// Code to start executing script when DOM ready
window.addEventListener('DOMContentLoaded', start);

function start(){

    // Event listener and function to scroll to info section when a button is clicked
    document.getElementById('info').addEventListener('click', () => {

        document.getElementById('title').scrollIntoView({behavior:"smooth"});
    })


}
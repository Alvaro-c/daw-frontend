window.addEventListener('DOMContentLoaded', start);

function start(){

    document.getElementById('info').addEventListener('click', () => {

        document.getElementById('title').scrollIntoView({behavior:"smooth"});
    })


}
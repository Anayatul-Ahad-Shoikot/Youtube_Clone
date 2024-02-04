const menuIcon = document.querySelector('.left-side i');
const sideBar = document.querySelector('.sidebar');

menuIcon.onclick = function (){
    sideBar.classList.toggle("small-sidebar");
}
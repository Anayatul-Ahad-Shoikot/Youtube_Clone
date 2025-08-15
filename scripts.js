const menuIcon = document.querySelector('.left-side i');
const sideBar = document.querySelector('.sidebar');

menuIcon.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.toggle("active");
    } else {
        sideBar.classList.toggle("small-sidebar");
    }
});
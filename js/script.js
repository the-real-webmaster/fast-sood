const menuBtn = document.querySelector('.menu-open');
const menuList = document.querySelector('.header-list');
const body = document.body;

menuBtn.addEventListener("click", () => {
    menuList.classList.toggle('open');
    body.classList.toggle('not-scroll');
})
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.top nav');
let isNavOpen = false;

hamburger.addEventListener('click', () => {
    if (isNavOpen) {
        isNavOpen = false;
        nav.style.display = 'none';
    } else {
        isNavOpen = true;
        nav.style.display = 'block';
    }
});

const breakpoint = 1024;
window.onresize = () => {
    console.log(window.innerWidth)
    if (window.innerWidth >= breakpoint) {
        nav.style.display = 'block'
    } else {
        nav.style.display = 'none';
    }
};

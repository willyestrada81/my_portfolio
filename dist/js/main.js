// Select DOM items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

//Set initial state of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        
        showMenu = true;

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

window.onscroll = () => {
    const nav = document.querySelector("#navbar");
    if (this.scrollY <= 10) nav.className = "";
    else nav.className = "scroll";
};


function onMouseOver() {
    document.getElementById("project-card").className = 'project-desc-no-img';
}
function onMouseOut() {
    document.getElementById("project-card").className = 'project-desc';
}

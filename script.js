const header = document.querySelector("header");

window.addEventListener("scroll" , function(){
    header.classList.toggle("sticky", window.scrollY > 130);
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = () =>{
    menu.querySelector('i').classList.toggle('ri-close-line');
    menu.querySelector('i').classList.toggle('ri-menu-line');
    menulist.classList.toggle('open');
};

window.onscroll = () =>{
    menu.querySelector('i').classList.remove('ri-close-line');
    menu.querySelector('i').classList.add('ri-menu-line');
    menulist.classList.remove('open');
};

// Update active nav link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menulist li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
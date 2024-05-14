// firebase connection 

const firebaseConfig = {
    apiKey: "AIzaSyA9-GWySGWBtZzaCJ8G_zRX0yOzKedTvVI",
    authDomain: "my-portfolio-2c04e.firebaseapp.com",
    databaseURL: "https://my-portfolio-2c04e-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-2c04e",
    storageBucket: "my-portfolio-2c04e.appspot.com",
    messagingSenderId: "580404920438",
    appId: "1:580404920438:web:3b7585e823543d4efb1f57",
    measurementId: "G-WDGSGBWPTL"
  };

//   initialize firebase
  firebase.initializeApp(firebaseConfig);

// reference database
 var contact = firebase.database().ref("contact");  

 document.getElementById("contact").addEventListener("submit" ,submiForm);

 function submiForm(e){
    e.preventDefault();
 }

 const getElementVal = (id) => {
    return document.getElementById(id).value;
 };

/*================= toggle icon navbar ==============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



// scroll section 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
     sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
     });
    //  sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*================= remove toggle icon  & navbar  jab navbar pe click kiya ya scroll==============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*================= scroll reveal ==============*/

ScrollReveal({
    // reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
     });

     ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
     ScrollReveal().reveal('.home-img, .servies-container, .portfolio-box, .contact form', { origin: 'bottom' });
     ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
     ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*================= typed js ==============*/

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Video Editor','Digital Artist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
    

});


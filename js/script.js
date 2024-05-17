// firebase connection 

const firebaseConfig = {
    apiKey: "AIzaSyAdnev-zaH0mgZnAiPbQPu2bN-KcAImm7k",
    authDomain: "portfolio-39b95.firebaseapp.com",
    databaseURL: "https://portfolio-39b95-default-rtdb.firebaseio.com",
    projectId: "portfolio-39b95",
    storageBucket: "portfolio-39b95.appspot.com",
    messagingSenderId: "580903397676",
    appId: "1:580903397676:web:c2efd859e9cfffdf282489",
    measurementId: "G-M8ZE232V1Q"
  };


//   initialize firebase
firebase.initializeApp(firebaseConfig);

// reference database
 var contactFormDB = firebase.database().ref("contactForm");  

 document.getElementById("contactForm").addEventListener("submit" ,submitForm);

 function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var number = getElementVal('number');
    var msgContent = getElementVal('msgContent');
    
    saveMessages(name, emailid, number, msgContent);

    //enable alert
    document.querySelector(".alert").style.display = "block";

    //disable alert
    setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
    }, 3000);

    //reset the form
    document.getElementById("contactForm").reset();
 }

const saveMessages = (name, emailid, number, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        number: number,
        msgContent: msgContent,

    });

};

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
    strings: ['Web Developer','Video Editor','Digital Artist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
    

});

